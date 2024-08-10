
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ab95d6 
		"--color-primary-50": "242 239 249", // #f2eff9
		"--color-primary-100": "238 234 247", // #eeeaf7
		"--color-primary-200": "234 229 245", // #eae5f5
		"--color-primary-300": "221 213 239", // #ddd5ef
		"--color-primary-400": "196 181 226", // #c4b5e2
		"--color-primary-500": "171 149 214", // #ab95d6
		"--color-primary-600": "154 134 193", // #9a86c1
		"--color-primary-700": "128 112 161", // #8070a1
		"--color-primary-800": "103 89 128", // #675980
		"--color-primary-900": "84 73 105", // #544969
		// secondary | #FF006E 
		"--color-secondary-50": "255 217 233", // #ffd9e9
		"--color-secondary-100": "255 204 226", // #ffcce2
		"--color-secondary-200": "255 191 219", // #ffbfdb
		"--color-secondary-300": "255 153 197", // #ff99c5
		"--color-secondary-400": "255 77 154", // #ff4d9a
		"--color-secondary-500": "255 0 110", // #FF006E
		"--color-secondary-600": "230 0 99", // #e60063
		"--color-secondary-700": "191 0 83", // #bf0053
		"--color-secondary-800": "153 0 66", // #990042
		"--color-secondary-900": "125 0 54", // #7d0036
		// tertiary | #F8C630 
		"--color-tertiary-50": "254 246 224", // #fef6e0
		"--color-tertiary-100": "254 244 214", // #fef4d6
		"--color-tertiary-200": "253 241 203", // #fdf1cb
		"--color-tertiary-300": "252 232 172", // #fce8ac
		"--color-tertiary-400": "250 215 110", // #fad76e
		"--color-tertiary-500": "248 198 48", // #F8C630
		"--color-tertiary-600": "223 178 43", // #dfb22b
		"--color-tertiary-700": "186 149 36", // #ba9524
		"--color-tertiary-800": "149 119 29", // #95771d
		"--color-tertiary-900": "122 97 24", // #7a6118
		// success | #f07fa7 
		"--color-success-50": "253 236 242", // #fdecf2
		"--color-success-100": "252 229 237", // #fce5ed
		"--color-success-200": "251 223 233", // #fbdfe9
		"--color-success-300": "249 204 220", // #f9ccdc
		"--color-success-400": "245 165 193", // #f5a5c1
		"--color-success-500": "240 127 167", // #f07fa7
		"--color-success-600": "216 114 150", // #d87296
		"--color-success-700": "180 95 125", // #b45f7d
		"--color-success-800": "144 76 100", // #904c64
		"--color-success-900": "118 62 82", // #763e52
		// warning | #ff5900 
		"--color-warning-50": "255 230 217", // #ffe6d9
		"--color-warning-100": "255 222 204", // #ffdecc
		"--color-warning-200": "255 214 191", // #ffd6bf
		"--color-warning-300": "255 189 153", // #ffbd99
		"--color-warning-400": "255 139 77", // #ff8b4d
		"--color-warning-500": "255 89 0", // #ff5900
		"--color-warning-600": "230 80 0", // #e65000
		"--color-warning-700": "191 67 0", // #bf4300
		"--color-warning-800": "153 53 0", // #993500
		"--color-warning-900": "125 44 0", // #7d2c00
		// error | #ff0000 
		"--color-error-50": "255 217 217", // #ffd9d9
		"--color-error-100": "255 204 204", // #ffcccc
		"--color-error-200": "255 191 191", // #ffbfbf
		"--color-error-300": "255 153 153", // #ff9999
		"--color-error-400": "255 77 77", // #ff4d4d
		"--color-error-500": "255 0 0", // #ff0000
		"--color-error-600": "230 0 0", // #e60000
		"--color-error-700": "191 0 0", // #bf0000
		"--color-error-800": "153 0 0", // #990000
		"--color-error-900": "125 0 0", // #7d0000
		// surface | #1446A0 
		"--color-surface-50": "220 227 241", // #dce3f1
		"--color-surface-100": "208 218 236", // #d0daec
		"--color-surface-200": "196 209 231", // #c4d1e7
		"--color-surface-300": "161 181 217", // #a1b5d9
		"--color-surface-400": "91 126 189", // #5b7ebd
		"--color-surface-500": "20 70 160", // #1446A0
		"--color-surface-600": "18 63 144", // #123f90
		"--color-surface-700": "15 53 120", // #0f3578
		"--color-surface-800": "12 42 96", // #0c2a60
		"--color-surface-900": "10 34 78", // #0a224e
		
	}
}