module.exports = function(grunt) {
    grunt.initConfig({
        shell: {
            pythonServer: {
                options: {
                    stdout: true
                },
                command: 'python ./scripts/md/render.py'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            all: {
                files: [
                    'scripts/md/slides.md',
                    'theme/css/*.css',
                    'js/**/*.js'
                ],
                tasks: ['default'],
                options: {
                    nospawn: true,
                    interrupt: false,
                    debounceDelay: 250
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['shell:pythonServer', 'watch']);    
}
