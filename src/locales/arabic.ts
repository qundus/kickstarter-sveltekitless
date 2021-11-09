import type AppPages from "./_app";

export default {
	index: {
		nav: "المنزل",
		seo: {
			title: "الصفحة الرئيسية",
		},
		description: "انت الان في الصفحة الرئيسية",
	},
	_fallback: {
		nav: "تجربة الخطأ",
		seo: {
			title: "قد حدث خطأ",
		},
		back: "العودة للصفحة السابقة",
		_404: "الصفحة غير موجودة",
	},
} as AppPages;
