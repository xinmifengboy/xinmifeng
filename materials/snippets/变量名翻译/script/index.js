const path = require("path");
module.exports = {
	beforeCompile: (context) => {
		context.outputChannel.appendLine("compile 变量名翻译 start");
	},
	afterCompile: (context) => {
		context.outputChannel.appendLine("compile 变量名翻译 end");
	},
	test: (context) => {
		context.outputChannel.appendLine(Object.keys(context))
		context.outputChannel.appendLine(JSON.stringify(context.model))
		context.outputChannel.appendLine(context.params)
		return { ...context.model, name: "测试一下", }
	},
};