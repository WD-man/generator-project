const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        this.answer = await this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'enter name',
                default: 'new_project',
            },
        ]);
    }

    async writing() {
        await this.fs.copyTpl(
            this.templatePath(''),
            this.destinationPath(`${this.answer.name}/`),
        );
        await this.fs.copy(
            this.templatePath('.*'),
            this.destinationPath(`${this.answer.name}/`),
        );
    }
};
