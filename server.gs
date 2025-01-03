function doGet() {
  const html = HtmlService.createTemplateFromFile('index');
  return html.evaluate()
    .setTitle('COFARSUR VM')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setFaviconUrl('https://www.cofarsur.net/images/favico.png');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
