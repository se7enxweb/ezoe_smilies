{def $smilies = ezini( 'smilies', 'SmilieList', 'content.ini' )}
<script type="text/javascript">
function insertChar( chr, smilie_code )
{ldelim}
        // New goal should be: $output .= '<img customattributes="image_url|/path/to/highfive.gifattribute_separationsmilie|highfive.gif" type="custom" class="mceItemCustomTag smilies" mce_src="/path/to/highfive.gif" src="/path/to/highfive.gif">';
        var ed = tinyMCEPopup.editor, dom = ed.dom;
        tinyMCEPopup.execCommand('mceInsertContent', false, dom.createHTML('img', {ldelim}
                        'customattributes' : 'image_url|' + {'extension/ezoe_smilies/design/standard/images/smilies/'|ezroot()} + chr + 'attribute_separation' + 'smilie|' + smilie_code,
                        'type' : 'custom',
                        'class' : 'mceItemCustomTag smilies',
                        'src' : {'extension/ezoe_smilies/design/standard/images/smilies/'|ezroot()} + chr,
                        'mce_src': {'extension/ezoe_smilies/design/standard/images/smilies/'|ezroot()} + chr
                        {rdelim},
                        ''
                ));
        // Refocus in window
        if (tinyMCEPopup.isWindow)
                window.focus();

        tinyMCEPopup.editor.focus();
        tinyMCEPopup.close();
{rdelim}
</script>
{foreach $smilies as $smilie_code => $smilie_image}
    <a href="javascript:void(0)" onclick="insertChar('{$smilie_image}', '{$smilie_code}');" onclick="return false;" onmousedown="return false;" title="{$smilie_code|wash()}"><img src={concat( 'smilies/', $smilie_image )|ezimage()} alt="{$smilie_code|wash()}" /></a>
{/foreach}