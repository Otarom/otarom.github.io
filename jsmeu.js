$('#showPdf').click(function() {
      var pdf = new jsPDF();  
      pdf.addHTML($("#divContent"), function() {
    	var blob = pdf.output("blob");
        window.open(URL.createObjectURL(blob));
      });
    });
$('#downloadPdf').click(function() {
  var pdf = new jsPDF();  
  pdf.addHTML($("#divContent"), function() {
	pdf.save('pageContent.pdf');
  });
});