{
    let fontFile = `${app.path.srcFolder}/scss/fonts.scss`;
    fs.readdir(app.path.build.fonts, function(err, fontFiles){
        if(fontFiles){
            if(!fs.existsSync(fontFile)){
                fs.writeFile(fontFile, '', cb);
            let newFileOnly;
            for(var i=0; i < fontFiles.length; i++){
                let fontFileName = fontFiles[i].split('.')[0];
                if(newFileOnly !== fontFileName) {
                    let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                    let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                    if(fontWeight.toLowerCase() === 'thin') {
                        fontWeight = 100;
                    } else if (fontWeight.toLowerCase() === 'extralight') {
                        fontWeight = 200;
                    } else if (fontWeight.toLowerCase() === 'light') {
                        fontWeight = 300;
                    } else if (fontWeight.toLowerCase() === 'medium') {
                        fontWeight = 500;
                    } else if (fontWeight.toLowerCase() === 'semibold') {
                        fontWeight = 600;
                    } else if (fontWeight.toLowerCase() === 'bold') {
                        fontWeight = 700;
                    } else {
                        fontWeight = 400;
                    }
                    fs.appendFile(fontFile, `@font-face {
                        font-family: ${fontName};
                        font-display: swap;
                        src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                        font-weight: ${fontWeight};
                        font-style: normal;
                    }\r\n`, cb);
                    newFileOnly = fontFileName;
                }
            }
            } else {
                console.log(" Файл scss/fonts.scss уже существует. Для обновления нужно его удалить ")
            }
         }   
    })
}
