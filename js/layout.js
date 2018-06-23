function setLayout()
			{
    $("#headerdiv").append(
        //"<div style='border: 1px solid; background:lightgray; height: 150px; width: 15%; float: left;'><img src='./images/GingerIcon.png' width='170' height='150'/></div>"
        "<div id ='logo'><img src='./images/GingerIcon.png' width='170' height='150' title='GingerIcon' alt='Ginger Icon' /></div>"
    );	

				//h = "<div style='border: 1px solid; height: 150px; width: 60%; float: left; background:orange;'>";
				// h += "<h1>Ginger Automation</h1>"
                h = "<div id='headercenter'>";
				h += "<h1>Ginger Automation</h1>";
				h += "<h5>Spice it up!</h4>";
				h += "<br/>";

				s= '<nav><ul>';
				s+='<li><a href="./index.html">Home</li>';
				s+='<li><a href="./plugins.html">Plugins</li>';
				s+='<li><a href="./download.html">Download</li>';
				s+='<li><a href="./documentation.html">Documentation</li>';
				s+='<li><a href="./support.html">Support</li>';
				s+='<li><a href="./about.html">About</a></li>';				
				s+='</ul></nav>'
				h+=s;

				h += "</div>"
				$("#headerdiv").append(h);	
				
                //h2 = "<div style='border: 1px solid; height: 150px; width: 20%; float: right; background:lightgray;'>";
                h2 = "<div id ='amdocsIcon'>";
                h2 += "<img src='./images/amdocsIcon.png' width='175' height='100' title='amdocsIcon' alt='amdocs Icon'/>"
				h2+= "</br>";
				h2+= "<label>by amdocs</label>";
				h2 += "</div>"
				
				$("#headerdiv").append(h2);	
				
				a='<ul>';
				a='<li><a href="mailto:ginger@gmail.com">email</a></li>';
				a+='<li><a href="https://github.com/ginger-automation">github.com/ginger-automation</a></li>';
				a+='</ul>';
				$("#footer").append(a);
            
        

			}
