function setLayout()
			{
				$("#headerdiv").append("<img src='./images/Plugin.png' width='200' height='200'/>");	
				$("#headerdiv").append("<h1>Ginger Automation</h1>");	
				
				s= '<nav><ul>';
				s+='<li><a href="./index.html">Home</li>';
				s+='<li><a href="./plugins.html">Plugins</li>';
				s+='<li><a href="./download.html">Download</li>';
				s+='<li><a href="./documentation.html">Documentation</li>';
				s+='<li><a href="./support.html">Support</li>';
				s+='<li><a href="./about.html">About</a></li>';				
				s+='</ul></nav>'
				$("#headerdiv").append(s);	
				
				a='<ul>';
				a='<li><a href="mailto:ginger@gmail.com">email</a></li>';
				a+='<li><a href="https://github.com/ginger-automation">github.com/ginger-automation</a></li>';
				a+='</ul>';
				$("#footer").append(a);
            
        

			}