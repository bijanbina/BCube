/**
 * Plugin which provides a persistent login functionality.
 * Also known as "remembery me" or "stay logged in" function.
 * 
 * The rendererd form needs to provide at least:
 * - <input type="checkbox" name="_ifpl" id="_ifpl" value="1">
 *
 * @version @package_version@
 * @author insaneFactory, Manuel Freiholz
 * @website http://manuel.insanefactory.com/
 * @requires Client side: ECMAScript 6 (ES6)
 */
$(document).ready(function () {
	if (window.rcmail) {

		rcmail.addEventListener('init', function () {

			var html = '';
			var parentElementSelector = 'form';

			// Insert different HTML for different skins.
		
			parentElementSelector = '#login-form table tbody';
			html = `
				<tr class="form-group row">
					<td class="title" style="display: none;">
						<label for="rcmloginuser">Username</label>
					</td>
					<td class="input input-group input-group-lg">
						<div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" id="_ifpl" name="_ifpl" value="1" checked>
							<label class="custom-control-label" for="_ifpl">` + rcmail.gettext('ifpl_rememberme', 'persistent_login') + `</label>
						</div>
					</td>
				</tr>
				<tr id="ifpl-hint" class="form-group row" style="display: none;">
					<td class="ifpl-hint" colspan="2">` + rcmail.gettext('ifpl_rememberme_hint', 'persistent_login') + `</td>
				</tr>
			`;
		
			// apppend "html" with checkbox to document.
			var element = $(parentElementSelector);
			if (element && element.length !== 0)
			{
				element.append(html);
			}
			else
				{
				$('form').append(html);
			}

		});

	} // if (window.rcmail)
});