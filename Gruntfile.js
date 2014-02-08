// Generated on 2013-09-11 using generator-webapp 0.4.2
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    //assemble is persnickety
    grunt.loadNpmTasks('assemble');

    // Initialize config.
    grunt.initConfig({
        pkg: require('./package.json'),
        watch: {
            compass: {
                files: ['<%= pkg.app %>/**/*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= pkg.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= pkg.app %>/*.html',
                    '.tmp/*.html', //assemble build
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= pkg.app %>}/scripts/{,*/}*.js',
                    '{.tmp,<%= pkg.app %>}/**/*.js',
                    '<%= pkg.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            },
            assemble: {
                files: ['<%= pkg.app %>/**/*.{hbs,json}'],
                tasks: ['assemble:server']
            }
        },
        assemble: {
            options: {
                flatten: true,
                data: '{<%= pkg.app %>/components/**/*.json, <%= pkg.app %>/pages/**/*.json}',
                layout: 'default.hbs',
                layoutdir: '<%= pkg.app %>/components/global',
                // assets: 'dist/images',
                partials: ['<%= pkg.app %>/components/**/*.hbs']
            },
            dist: {
                files: {
                    '<%= pkg.dist %>': ['<%= pkg.app %>/pages/**/*.hbs']
                }
            },
            server: {
                files: {
                    '.tmp/': ['<%= pkg.app %>/pages/**/*.hbs']
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= pkg.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= pkg.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= pkg.dist %>'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= pkg.dist %>/*',
                        '!<%= pkg.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '<%= pkg.app %>/scripts/{,*/}*.js',
                '<%= pkg.app %>/components/**/*.js',
                '<%= pkg.app %>/pages/**/*.js',
                '!<%= pkg.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        // mocha: {
        //     all: {
        //         options: {
        //             run: true,
        //             urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
        //         }
        //     }
        // },
        compass: {
            options: {
                require: ['breakpoint'],
                sassDir: '<%= pkg.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= pkg.app %>/images',
                javascriptsDir: '<%= pkg.app %>',
                fontsDir: '<%= pkg.app %>/styles/fonts',
                importPath: '<%= pkg.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= pkg.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        stripmq: {
            options: {
                width: 640,                 // viewport width, default is 1024
                height: 480,                // viewport height, default is 768
                'device-pixel-ratio': 2     // default is 1
            },
            all: {
                files: {
                    '<%= pkg.dist %>/styles/legacy.css': ['.tmp/styles/main.css']
                }
                // files: [
                //     {
                //         expand: true,
                //         cwd: '<%= pkg.app %>/styles',
                //         src: ['main.css'],
                //         dest: '.tmp/styles/',
                //         ext: '-ie.css',
                //     },
                // ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        concat: {
            dist: {}
        },
        'bower-install': {
            app: {
                html: '<%= pkg.app %>/index.html',
                ignorePath: '<%= pkg.app %>/'
            }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= pkg.dist %>/scripts/{,*/}*.js',
                        '<%= pkg.dist %>/pages/**/*.js',
                        '<%= pkg.dist %>/components/**/*.js',
                        '!<%= pkg.dist %>/scripts/vendor/*',
                        '<%= pkg.dist %>/styles/{,*/}*.css',
                        '<%= pkg.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= pkg.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= pkg.dist %>'
            },
            // html: '<%= pkg.app %>/index.html'
            html: '.tmp/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= pkg.dist %>']
            },
            html: ['<%= pkg.dist %>/{,*/}*.html'],
            css: ['<%= pkg.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= pkg.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= pkg.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            dist: {
                files: {
                    '<%= pkg.dist %>/styles/main.css': [
                        // '<%= pkg.app %>/styles/{,*/}*.css',
                        '.tmp/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= pkg.app %>',
                    src: '*.html',
                    dest: '<%= pkg.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= pkg.app %>',
                    dest: '<%= pkg.dist %>',
                    src: [
                        '*.{ico,png,txt}', //,html
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                        'scripts/vendor/{,*/}*.js'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= pkg.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'compass',
                'copy:styles',
                'assemble'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass',
                'copy:styles',
                'assemble',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        compress: {
            main: {
                options : {
                    archive : 'dist/<%= pkg.repo %>.zip'
                },
                files : [
                    {
                        expand: true,
                        src : '**/*',
                        cwd : 'dist/'
                    }
                ]
            }
        },
        // migrate to this: https://github.com/sindresorhus/grunt-shell
        exec: {
            version: {
                cwd : 'dist/',
                command: 'touch version.txt'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });
    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test'
        //, 'mocha'
    ]);
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        // 'uglify',
        'copy:dist',
        'rev',
        'stripmq', //strips media queries last!
        'usemin',
        'exec:version' //creates an empty version.txt file for Jenkins to use
    ]);
    grunt.registerTask('deploy', [
        'compress'
    ]);
    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
