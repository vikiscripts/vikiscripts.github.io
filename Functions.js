    //This Java Script file is used to keep all functions to be used
    function ToggleDiv(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    	} else {
        x.style.display = 'none';
    	}
	}

	function EmbedGist(url) {
	    document.write('<scri'+'pt src="'+ url +'"></'+'script>');
	}

	//"javascript:myFunction('https://gist.github.com/hclpandv/4e3b7e87ed0ed83045d16034701c39e3.js')"


    function show() { 
        if(document.getElementById('mygist-long').style.display=='none') { 
            document.getElementById('mygist-long').style.display='block'; 
        } 
        return false;
    } 


    function hide() { 
        if(document.getElementById('mygist-long').style.display=='block') { 
            document.getElementById('mygist-long').style.display='none'; 
        } 
        return false;
    }  