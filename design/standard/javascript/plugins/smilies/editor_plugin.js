(function() {
    // Load plugin specific language pack
    tinymce.PluginManager.requireLangPack( 'smilies' );

    tinymce.create('tinymce.plugins.Smilies', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {
            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
            ed.addCommand('mceSmilies', function() {
                ed.windowManager.open({
                    file: ed.settings.ez_extension_url + '/dialog/' + ed.settings.ez_contentobject_id + '/' + ed.settings.ez_contentobject_version + '/smilies',
                    width : 550 + parseInt(ed.getLang('smilies_delta_width', 0)),
                    height : 250 + parseInt(ed.getLang('smilies_delta_height', 0)),
                    inline : true
                }, {
                    theme_url : this.url
                });
            });

            // Register smilies button
            ed.addButton('smilies', {
                title : 'Smilies',
                cmd : 'mceSmilies',
                image : ed.settings.ez_root_url + 'extension/ezoe_smilies/design/standard/javascript/plugins/smilies/img/smilies.gif'
            });

            // Add a node change handler, selects the button in the UI when a image is selected
            ed.onNodeChange.add(function(ed, cm, n) {
                cm.setActive('smilies', n.nodeName == 'Smilies');
            });
        },

        /**
         * Creates control instances based in the incoming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl : function(n, cm) {
            return null;
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'Smilies by Mugo',
                author : 'Peter Keung',
                authorurl : 'http://www.mugo.ca',
                infourl : 'http://www.mugo.ca',
                version : 0.1
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add( 'smilies', tinymce.plugins.Smilies );
})();