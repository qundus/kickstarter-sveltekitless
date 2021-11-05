import type LOCALE_I18N from "./_base";
import type { PAGE_I18N } from "./_base";

const index: PAGE_I18N = {
	nav: "المنزل",
	seo: {
		title: "الصفحة الرئيسية",
	},
	description: "انت الان في الصفحة الرئيسية",
};

const about: PAGE_I18N = {
	nav: "معلومات عنّا",
	seo: {
		title: "معلومات عنّا",
	},
	description: "انت الان في صفحة التعرفة",
};

const fallback: PAGE_I18N = {
	nav: "تجربة الخطأ",
	seo: {
		title: "قد حدث خطأ",
	},
	back: "العودة للصفحة السابقة",
	[404]: "الصفحة غير موجودة",
};

const locale: LOCALE_I18N = {
	index: index,
	about: about,
	_fallback: fallback,
};

export default locale;
