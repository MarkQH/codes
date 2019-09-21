/*!
 * file
 * create: 2019/03/04
 * since: 0.0.1
 */
'use strict';

const $ = require('jquery');
const JSON3 = require('json3');

function progressBar (ev) {
  let precent = (100 * ev.loaded / ev.total).toFixed(2);
  $(document).trigger('bs.fileProcessStart', precent);
}

module.exports = {

  // 上传图片
  upload(el, successCb = () => {}, failCb = () => {}) {
    try {
      let $doc = $(document);
      $doc.trigger('bs.fileProcessStart');
      let $iframe = $(`<iframe name="g_upload_box" class="hidden"></iframe>`);
      let $form = $(`<form action="xxxxxx/xxxx/xxxx" enctype="multipart/form-data" method="POST" target="g_upload_box"></form>`);
      $form.append($(el).attr('name', 'files'));
      $form.appendTo($iframe);
      $('body').append($iframe);
      $form.submit();
      $(el).val('');
      $iframe
        .on('load', function(e = event) {
          try {
            let $req = $($iframe.get(0).contentWindow.document.body);
            let out = JSON3.parse($req.text());
            if(out.code != '0000'){
              throw out.message;
            }
            $doc.trigger('bs.fileProcessEnd');
            $iframe.remove();
            successCb(out);
          } catch (error) {
            $.alert(error);
            $iframe.remove();
            $doc.trigger('bs.fileProcessEnd');
            failCb();
          }
        });
    } catch (error) {
      $.alert('图片上传失败');
      $iframe.remove();
      $doc.trigger('bs.fileProcessEnd');
      failCb();
    }
  },

};
