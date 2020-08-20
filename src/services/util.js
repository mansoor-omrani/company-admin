import { isEmpty, isNumber, forEach } from 'locustjs-base';
import Mime from 'locustjs-mime'
import $ from 'jquery';
import { htmlEncode } from 'js-htmlencode';

class Util {
	static pagingCalc(currentPage, recordCount, pageSize, pageLength) {
		const result = {
			currentPage: currentPage,
			recordCount: recordCount,
			pageSize: pageSize,
			pageLength: pageLength,
			pageCount: 0
		};

		if (isEmpty(result.currentPage) || !isNumber(result.currentPage) || result.currentPage < 1) {
			result.currentPage = 1
		}

		if (isEmpty(result.pageSize) || !isNumber(result.pageSize) || result.pageSize < 1 || result.pageSize > 100) {
			result.pageSize = 10
		}

		if (isEmpty(result.recordCount) || !isNumber(result.recordCount) || result.recordCount < 0) {
			result.recordCount = 0
		}
		
		result.pageCount = Math.floor(result.recordCount / result.pageSize);

		if (result.pageCount == 0) {
			result.pageCount = 1;
		}

		if (result.recordCount > result.pageCount * result.pageSize) {
			result.pageCount++;
		}

		if (result.pageCount > 0 && result.currentPage > result.pageCount) {
			result.currentPage = result.pageCount
		}

		if (isEmpty(result.pageLength) || result.pageLength < 0 || result.pageLength > 20) {
			result.pageLength = 8
		}

		result.from = (result.currentPage - 1) * result.pageLength + 1
		result.to = result.from + result.pageLength - 1

		if (result.to > result.pageCount) {
			result.to = result.pageCount
        }

		return result;
	}
	static getDocTypes() {
		return [
			{ "name": "اسناد دانشنامه", "value": "01" },
			{ "name": "گواهي موقت", "value": "02" },
			{ "name": "گواهي معدل", "value": "03" },
			{ "name": "نامه نظام وظيفه", "value": "04" },
			{ "name": "ساير", "value": "05" }
		]
	}
	static HasAttachment(docType) {
		return !(docType == '01' || docType == '02' || docType == '03');
    }
	static isImageFile(file) {
		let result = false;

		if (file && file.type) {
			const imgExtensions = ['jpg', 'gif', 'jpeg', 'png', 'jpe'];
			const extensions = Mime.getExtensions(file.type);

			result = !(extensions.length == 0 || extensions.find(ex => imgExtensions.indexOf(ex) >= 0) == undefined);
		}

		return result;
	}
	static getInquiryAddFailedMessage(code) {
		const result = {
			type: 'warning',
			message: ''
		}

		switch (code) {
			case 1:	// NoPayment
				result.message = 'رکورد پرداخت مشخص نشده است';
				break;
			case 2:	// InvalidPayment
				result.message = 'رکورد پرداخت مشخص نشده یا مقدار مشخص شده نامعتبر است.';
				break;
			case 3: // NoInq
				result.message = 'درخواست استعلام پیدا نشد.\nلطفا دوباره برای ثبت درخواست تلاش کنید. اگر باز هم با خطا مواجه شدید با پشتیبانی سایت تماس بگیرید.';
				break;
			case 4: // InvalidInq
				result.message = 'حالت دور از انتظار. درخواست شما در سیستم وجود ندارد!\nلطفا دوباره برای ثبت درخواست تلاش کنید. اگر باز هم با خطا مواجه شدید با پشتیبانی سایت تماس بگیرید';
				break;
			case 5: // AlreadyPaid
				result.message = 'این درخواست قبلا پرداخت شده است';
				type = 'info';
				break;
			case 6: // Faulted
				result.message = 'متاسفانه هنگام تکمیل درخواست شما خطایی رخ داد.\nچیزی از حساب شما کسر نشده یا اگر کسر شده باشد به زودی به حساب شما عودت داده می‌شود.\nاز شما پوزش می‌خواهیم. به مشکل رسیدگی می‌کنیم';
				type = 'danger';
				break;
			case 7: // EndPaymentFailed
				result.message = 'متاسفانه ارتباط با درگاه بانکی به منظور تکمیل پرداخت شما با خطا مواجه شد.\nچیزی از حساب شما کسر نشده یا اگر کسر شده باشد به زودی به حساب شما عودت داده می‌شود.\nاز شما پوزش می‌خواهیم. به مشکل رسیدگی می‌کنیم';
				break;
			case 8: // Failed
				result.message = 'متاسفانه هنگام تکمیل درخواست شما خطایی رخ داد.\nچیزی از حساب شما کسر نشده یا اگر کسر شده باشد به زودی به حساب شما عودت داده می‌شود.\nاز شما پوزش می‌خواهیم. به مشکل رسیدگی می‌کنیم';
				type = 'danger';
				break;
			case 9: // PaymentNotFound
				result.message = 'رکورد پرداخت پیدا نشد.';
				type = 'danger';
				break;
			case 10: // Success
				result.message = 'درخواست استعلام نهایی شد. هنگامی که پاسخ استعلام آماده شد شما را مطلع می‌کنیم.';
				type = 'success';
				break;
			case 11: // SuccessWithResult
				result.message = 'درخواست استعلام نهایی شد. می‌توانید پاسخ استعلام را هم اکنون مشاهده نمایید.';
				type = 'success';
				break;
			case 12: // SuccessWithPending
				result.message = 'درخواست استعلام نهایی شد. مدارک دانشجوی مزبور مشکلی دارد. لطفا به دانشجوی یاد شده اعلام کنید به دانشگاه مراجعه کرده و نواقص را رفع کند تا بتوانیم پاسخ استعلام را اعلام کنیم.';
				type = 'success';
				break;
			case 13: // InqNotFound
				result.message = 'درخواست استعلام پیدا نشد.';
				break;
			case 14: // CoponInactive
				result.message = 'متاسفانه کوپن شما غیر فعال شده است. پرداخت تکمیل نشد.';
				break;
			case 15: // CoponExpired
				result.message = 'متاسفانه کوپن شما منقضی شده است. پرداخت تکمیل نشد.';
				break;
			case 16: // CoponUsed
				result.message = 'متاسفانه کوپن شما مصرف شده است. پرداخت تکمیل نشد.';
				break;
			case 17: // CoponFull
				result.message = 'متاسفانه تعداد دفعات استفاده از کوپنی که مشخص کردید به اتمام رسیده است. پرداخت تکمیل نشد.';
				break;
			case 18: // CoponProblematic
				result.message = 'حالت دور از انتظار. مشکلی در رابطه با کوپنی که مشخص کردید پیدا شده است. پرداخت تکمیل نشد.';
				break;
			case 19: // Flawed
				result.message = 'متاسفانه هنگام تکمیل درخواست شما خطایی رخ داد.\nچیزی از حساب شما کسر نشده یا اگر کسر شده باشد به زودی به حساب شما عودت داده می‌شود.\nاز شما پوزش می‌خواهیم. به مشکل رسیدگی می‌کنیم';
				type = 'danger';
				break;
			case 20: // Errored
				result.message = 'متاسفانه هنگام تکمیل درخواست شما خطایی رخ داد.\nچیزی از حساب شما کسر نشده یا اگر کسر شده باشد به زودی به حساب شما عودت داده می‌شود.\nاز شما پوزش می‌خواهیم. به مشکل رسیدگی می‌کنیم';
				type = 'danger';
				break;
			default:
				result.message = 'حالت نامعلوم. درخواست شما تکمیل نشد.';
				break;
		}

		return result;
	}
	static BankGatewaybeginPayment(beginPaymentResult) {
		let result = false;

		if (beginPaymentResult && beginPaymentResult.Url) {
			if (beginPaymentResult.Method == 'POST') {
				let html = `<form action="${beginPaymentResult.Url}" method="POST" style="display:none">`;

				forEach(beginPaymentResult.Args, arg => {
					html += `<input type="hidden" name="${htmlEncode(arg.key)}" value="${htmlEncode(arg.value)}" />`
				});

				html += '<input type="submit" id="__btnPost" style="display:none" /></form>'

				$('body').append(html);
				$('#__btnPost').click();
			} else {
				let args = '';

				forEach(beginPaymentResult.Args, arg => {
					args += `&${arg.key}=${encodeURIComponent(arg.value)}`
				});

				window.location = beginPaymentResult.Url + '?' + args.substr(1);
            }
		}

		return result;
	}
}

export default Util;