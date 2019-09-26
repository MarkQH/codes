import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

download = ()   => {
  html2canvas(this.refs.pdf, {scale: 2}).then(canvas => {
    //返回图片dataURL，参数：图片格式和清晰度(0-1)
    let pageData = canvas.toDataURL('image/jpeg', 1.0);
    
    let dims = {
      a2: [1190.55, 1683.78],
      a3: [841.89, 1190.55],
      a4: [595.28, 841.89]
    }
    //方向默认竖直，尺寸ponits，格式a2
    let pdf = new jsPDF('', 'pt', 'a4');

    let a4Width = dims['a4'][0];
    let a4Height = dims['a4'][1];
    
    let contentWidth = canvas.width,
      contentHeight = canvas.height;
    
    let pageHeight = contentWidth/a4Width * a4Height;
    let leftHeight = contentHeight;
    let position = 0;
    let imgWidth = a4Width,
      imgHeight = a4Width/contentWidth * contentHeight;
    
    if(leftHeight < pageHeight) {
      //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
    } else {
      while(leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight );
        leftHeight -= pageHeight;
        position -= a4Height;

        if(leftHeight > 0) {
          pdf.addPage();
        }
      }
    }

    pdf.save('test.pdf');
  });
}