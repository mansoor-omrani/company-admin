import { isEmpty, isNumber, forEach } from 'locustjs-base';
import Mime from 'locustjs-mime'
import $ from 'jquery';
import { htmlEncode } from 'js-htmlencode';

class Util {
	static isImageFile(file) {
		let result = false;

		if (file && file.type) {
			const imgExtensions = ['jpg', 'gif', 'jpeg', 'png', 'jpe'];
			const extensions = Mime.getExtensions(file.type);

			result = !(extensions.length == 0 || extensions.find(ex => imgExtensions.indexOf(ex) >= 0) == undefined);
		}

		return result;
	}
}

export default Util;