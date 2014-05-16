// Docu : http://wiki.moxiecode.com/index.php/TinyMCE:Create_plugin/3.x#Creating_your_own_plugins

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('wpgcp');
	 
	tinymce.create('tinymce.plugins.wpgcp', {
		
		init : function(ed, url) {
		// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');

			ed.addCommand('wpgcp', function() {
				ed.windowManager.open({
					file : url + '/window.php',
					width : 500,
					height : 540,
					inline : 1
				}, {
					plugin_url : url // Plugin absolute URL
				});
			});

			// Register example button
			ed.addButton('wpgcp', {
				title : 'google-code-prettify',
				cmd : 'wpgcp',
				image : url + '/crayon_tinymce.png'
			});
			
			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('wpgcp', n.nodeName == 'IMG');
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
					longname  : 'wpgcp',
					author 	  : 'Olivier Cecillon',
					authorurl : 'http://www.blogoolic.fr',
					infourl   : 'http://www.blogoolic.fr',
					version   : "0.1 beta"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('wpgcp', tinymce.plugins.wpgcp);
})();


