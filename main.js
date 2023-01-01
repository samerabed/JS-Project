    function generateName()
    {
        var list = ["Sharif","Samer","Hamed","Abed","Mohammed","Hasan","Hamed","Yousef","Ameen","Hady"]
        var styles = ["style1","style2","style3","style4","style5","style6"]
        var name =  list[Math.floor(Math.random()*10)]
        var style = styles[Math.floor(Math.random()*10)]
        document.getElementById('samerabed').value = name
        document.getElementById("samerabed").setAttribute('class','form-control ' + style);



    }
    function ClearAll(){
        document.getElementById('samerabed').value=""
        document.getElementById("samerabed").setAttribute('class','form-control');

    }

