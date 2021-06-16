const THREAD_TABLE = {
    'metric': {
        'coarse': {
            'M0.3x0.09': {
                'ext': {
                    'pitch': 0.09,
                    'rRotation': 0.085,
                    'dSupport': 0.181,
                    'sectionProfile': [
                        [0, -0.041],
                        [0, 0.041],
                        [0.0607, 0.0059],
                        [0.0607, -0.0059]
                    ]
                },
                'sortSize': 0.3,
                'int': {
                    'pitch': 0.09,
                    'rRotation': -0.1629,
                    'dSupport': 0.318,
                    'sectionProfile': [
                        [0, 0.0445],
                        [0, -0.0445],
                        [0.0497, -0.0159],
                        [0.0497, 0.0159]
                    ]
                }
            },
            'M1.1x0.25': {
                'ext': {
                    'pitch': 0.25,
                    'rRotation': 0.3565,
                    'dSupport': 0.762,
                    'sectionProfile': [
                        [0, -0.1146],
                        [0, 0.1146],
                        [0.1678, 0.0178],
                        [0.1678, -0.0178]
                    ]
                },
                'sortSize': 1.1,
                'int': {
                    'pitch': 0.25,
                    'rRotation': -0.5928,
                    'dSupport': 1.1535,
                    'sectionProfile': [
                        [0, 0.1237],
                        [0, -0.1237],
                        [0.1583, -0.0323],
                        [0.1583, 0.0323]
                    ]
                }
            },
            'M1.6x0.3': {
                'ext': {
                    'pitch': 0.3,
                    'rRotation': 0.5785,
                    'dSupport': 1.207,
                    'sectionProfile': [
                        [0, -0.1349],
                        [0, 0.1349],
                        [0.1937, 0.023],
                        [0.1937, -0.023]
                    ]
                },
                'sortSize': 1.6,
                'int': {
                    'pitch': 0.3,
                    'rRotation': -0.8448,
                    'dSupport': 1.6515,
                    'sectionProfile': [
                        [0, 0.1485],
                        [0, -0.1485],
                        [0.1861, -0.0411],
                        [0.1861, 0.0411]
                    ]
                }
            },
            'M2.3x0.45': {
                'ext': {
                    'pitch': 0.45,
                    'rRotation': 0.82,
                    'dSupport': 1.7165,
                    'sectionProfile': [
                        [0, -0.2027],
                        [0, 0.2027],
                        [0.295, 0.0324],
                        [0.295, -0.0324]
                    ]
                },
                'sortSize': 2.3,
                'int': {
                    'pitch': 0.45,
                    'rRotation': -1.2187,
                    'dSupport': 2.38,
                    'sectionProfile': [
                        [0, 0.2228],
                        [0, -0.2228],
                        [0.281, -0.0605],
                        [0.281, 0.0605]
                    ]
                }
            },
            'M4.5x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 1.7195,
                    'dSupport': 3.5525,
                    'sectionProfile': [
                        [0, -0.3339],
                        [0, 0.3339],
                        [0.4845, 0.0541],
                        [0.4845, -0.0541]
                    ]
                },
                'sortSize': 4.5,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -2.3543,
                    'dSupport': 4.613,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4628, -0.1041],
                        [0.4628, 0.1041]
                    ]
                }
            },
            'M6x0.8': {
                'ext': {
                    'pitch': 0.8,
                    'rRotation': 2.442,
                    'dSupport': 4.997,
                    'sectionProfile': [
                        [0, -0.3536],
                        [0, 0.3536],
                        [0.5085, 0.06],
                        [0.5085, -0.06]
                    ]
                },
                'sortSize': 6.0,
                'int': {
                    'pitch': 0.8,
                    'rRotation': -3.106,
                    'dSupport': 6.1105,
                    'sectionProfile': [
                        [0, 0.396],
                        [0, -0.396],
                        [0.489, -0.1137],
                        [0.489, 0.1137]
                    ]
                }
            },
            'M7x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 2.9645,
                    'dSupport': 6.0475,
                    'sectionProfile': [
                        [0, -0.3353],
                        [0, 0.3353],
                        [0.4895, 0.0527],
                        [0.4895, -0.0527]
                    ]
                },
                'sortSize': 7.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -3.6078,
                    'dSupport': 7.12,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4663, -0.1021],
                        [0.4663, 0.1021]
                    ]
                }
            },
            'M8x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 3.298,
                    'dSupport': 6.7435,
                    'sectionProfile': [
                        [0, -0.444],
                        [0, 0.444],
                        [0.644, 0.0722],
                        [0.644, -0.0722]
                    ]
                },
                'sortSize': 8.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -4.1369,
                    'dSupport': 8.147,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6194, -0.1374],
                        [0.6194, 0.1374]
                    ]
                }
            },
            'M9x1.25': {
                'ext': {
                    'pitch': 1.25,
                    'rRotation': 3.636,
                    'dSupport': 7.4455,
                    'sectionProfile': [
                        [0, -0.5518],
                        [0, 0.5518],
                        [0.797, 0.0917],
                        [0.797, -0.0917]
                    ]
                },
                'sortSize': 9.0,
                'int': {
                    'pitch': 1.25,
                    'rRotation': -4.6644,
                    'dSupport': 9.17,
                    'sectionProfile': [
                        [0, 0.6188],
                        [0, -0.6188],
                        [0.7747, -0.1715],
                        [0.7747, 0.1715]
                    ]
                }
            },
            'M10x1.25': {
                'ext': {
                    'pitch': 1.25,
                    'rRotation': 4.136,
                    'dSupport': 8.4455,
                    'sectionProfile': [
                        [0, -0.5518],
                        [0, 0.5518],
                        [0.797, 0.0917],
                        [0.797, -0.0917]
                    ]
                },
                'sortSize': 10.0,
                'int': {
                    'pitch': 1.25,
                    'rRotation': -5.1644,
                    'dSupport': 10.17,
                    'sectionProfile': [
                        [0, 0.6188],
                        [0, -0.6188],
                        [0.7747, -0.1715],
                        [0.7747, 0.1715]
                    ]
                }
            },
            'M11x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 4.469,
                    'dSupport': 9.141,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.956, 0.1088],
                        [0.956, -0.1088]
                    ]
                },
                'sortSize': 11.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -5.692,
                    'dSupport': 11.1935,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.929, -0.2061],
                        [0.929, 0.2061]
                    ]
                }
            },
            'M12x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 4.965,
                    'dSupport': 10.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 12.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -6.197,
                    'dSupport': 12.203,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M14x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 5.965,
                    'dSupport': 12.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 14.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -7.197,
                    'dSupport': 14.203,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M15x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 6.465,
                    'dSupport': 13.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 15.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -7.697,
                    'dSupport': 15.2035,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M16x1.6': {
                'ext': {
                    'pitch': 1.6,
                    'rRotation': 6.919,
                    'dSupport': 14.037,
                    'sectionProfile': [
                        [0, -0.6994],
                        [0, 0.6994],
                        [1.0135, 0.1142],
                        [1.0135, -0.1142]
                    ]
                },
                'sortSize': 16.0,
                'int': {
                    'pitch': 1.6,
                    'rRotation': -8.1855,
                    'dSupport': 16.1855,
                    'sectionProfile': [
                        [0, 0.7868],
                        [0, -0.7868],
                        [0.9765, -0.223],
                        [0.9765, 0.223]
                    ]
                }
            },
            'M17x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 7.465,
                    'dSupport': 15.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 17.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -8.697,
                    'dSupport': 17.2035,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M18x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 7.6355,
                    'dSupport': 15.534,
                    'sectionProfile': [
                        [0, -0.8779],
                        [0, 0.8779],
                        [1.2745, 0.142],
                        [1.2745, -0.142]
                    ]
                },
                'sortSize': 18.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -9.2505,
                    'dSupport': 18.2505,
                    'sectionProfile': [
                        [0, 0.989],
                        [0, -0.989],
                        [1.2393, -0.2735],
                        [1.2393, 0.2735]
                    ]
                }
            },
            'M20x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 8.6355,
                    'dSupport': 17.534,
                    'sectionProfile': [
                        [0, -0.8779],
                        [0, 0.8779],
                        [1.2745, 0.142],
                        [1.2745, -0.142]
                    ]
                },
                'sortSize': 20.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -10.2505,
                    'dSupport': 20.2505,
                    'sectionProfile': [
                        [0, 0.989],
                        [0, -0.989],
                        [1.2393, -0.2735],
                        [1.2393, 0.2735]
                    ]
                }
            },
            'M22x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 8.985,
                    'dSupport': 18.337,
                    'sectionProfile': [
                        [0, -1.31],
                        [0, 1.31],
                        [1.8975, 0.2145],
                        [1.8975, -0.2145]
                    ]
                },
                'sortSize': 22.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -11.3385,
                    'dSupport': 22.3385,
                    'sectionProfile': [
                        [0, 1.4727],
                        [0, -1.4727],
                        [1.8375, -0.4118],
                        [1.8375, 0.4118]
                    ]
                }
            },
            'M24x2.5': {
                'ext': {
                    'pitch': 2.5,
                    'rRotation': 10.302,
                    'dSupport': 20.928,
                    'sectionProfile': [
                        [0, -1.0958],
                        [0, 1.0958],
                        [1.593, 0.1761],
                        [1.593, -0.1761]
                    ]
                },
                'sortSize': 24.0,
                'int': {
                    'pitch': 2.5,
                    'rRotation': -12.3055,
                    'dSupport': 24.3055,
                    'sectionProfile': [
                        [0, 1.2341],
                        [0, -1.2341],
                        [1.546, -0.3415],
                        [1.546, 0.3415]
                    ]
                }
            },
            'M25x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 11.1305,
                    'dSupport': 22.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 25.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -12.7552,
                    'dSupport': 25.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M27x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 12.1305,
                    'dSupport': 24.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 27.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -13.7552,
                    'dSupport': 27.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M28x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 12.6305,
                    'dSupport': 25.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 28.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -14.2552,
                    'dSupport': 28.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M30x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 12.9775,
                    'dSupport': 26.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 30.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -15.349,
                    'dSupport': 30.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M32x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 14.6305,
                    'dSupport': 29.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 32.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -16.2552,
                    'dSupport': 32.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M33x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 14.4775,
                    'dSupport': 29.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 33.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -16.849,
                    'dSupport': 33.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M36x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 15.9775,
                    'dSupport': 32.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 36.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -18.349,
                    'dSupport': 36.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M39x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 17.4775,
                    'dSupport': 35.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 39.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -19.849,
                    'dSupport': 39.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M40x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 17.9775,
                    'dSupport': 36.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 40.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -20.349,
                    'dSupport': 40.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M42x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 18.327,
                    'dSupport': 37.132,
                    'sectionProfile': [
                        [0, -1.7436],
                        [0, 1.7436],
                        [2.5255, 0.2855],
                        [2.5255, -0.2855]
                    ]
                },
                'sortSize': 42.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -21.4385,
                    'dSupport': 42.4385,
                    'sectionProfile': [
                        [0, 1.9598],
                        [0, -1.9598],
                        [2.4535, -0.5433],
                        [2.4535, 0.5433]
                    ]
                }
            },
            'M45x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 19.827,
                    'dSupport': 40.132,
                    'sectionProfile': [
                        [0, -1.7436],
                        [0, 1.7436],
                        [2.5255, 0.2855],
                        [2.5255, -0.2855]
                    ]
                },
                'sortSize': 45.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -22.9385,
                    'dSupport': 45.4385,
                    'sectionProfile': [
                        [0, 1.9598],
                        [0, -1.9598],
                        [2.4535, -0.5433],
                        [2.4535, 0.5433]
                    ]
                }
            },
            'M48x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 21.321,
                    'dSupport': 43.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 48.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -24.446,
                    'dSupport': 48.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M50x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 22.321,
                    'dSupport': 45.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 50.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -25.446,
                    'dSupport': 50.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M52x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 23.321,
                    'dSupport': 47.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 52.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -26.446,
                    'dSupport': 52.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M55x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 24.821,
                    'dSupport': 50.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 55.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -27.946,
                    'dSupport': 55.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M56x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 25.321,
                    'dSupport': 51.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 56.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -28.446,
                    'dSupport': 56.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M58x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 26.321,
                    'dSupport': 53.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 58.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -29.446,
                    'dSupport': 58.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M60x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 27.321,
                    'dSupport': 55.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 60.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -30.446,
                    'dSupport': 60.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M62x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 28.321,
                    'dSupport': 57.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 62.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -31.446,
                    'dSupport': 62.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M64x5.5': {
                'ext': {
                    'pitch': 5.5,
                    'rRotation': 28.35,
                    'dSupport': 57.3355,
                    'sectionProfile': [
                        [0, -2.3911],
                        [0, 2.3911],
                        [3.475, 0.3848],
                        [3.475, -0.3848]
                    ]
                },
                'sortSize': 64.0,
                'int': {
                    'pitch': 5.5,
                    'rRotation': -32.5745,
                    'dSupport': 64.5745,
                    'sectionProfile': [
                        [0, 2.6866],
                        [0, -2.6866],
                        [3.364, -0.7444],
                        [3.364, 0.7444]
                    ]
                }
            },
            'M65x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 29.821,
                    'dSupport': 60.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 65.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -32.946,
                    'dSupport': 65.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M68x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 30.0235,
                    'dSupport': 60.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 68.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -34.6205,
                    'dSupport': 68.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M70x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 31.0235,
                    'dSupport': 62.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 70.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -35.6205,
                    'dSupport': 70.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M72x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 32.0235,
                    'dSupport': 64.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 72.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -36.6205,
                    'dSupport': 72.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M75x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 33.5235,
                    'dSupport': 67.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 75.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -38.1205,
                    'dSupport': 75.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M76x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 34.0235,
                    'dSupport': 68.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 76.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -38.6205,
                    'dSupport': 76.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M80x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 36.0235,
                    'dSupport': 72.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 80.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -40.6205,
                    'dSupport': 80.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M85x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 38.5235,
                    'dSupport': 77.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 85.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -43.1205,
                    'dSupport': 85.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M90x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 41.0235,
                    'dSupport': 82.736,
                    'sectionProfile': [
                        [0, -2.6065],
                        [0, 2.6065],
                        [3.7865, 0.4204],
                        [3.7865, -0.4204]
                    ]
                },
                'sortSize': 90.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -45.6205,
                    'dSupport': 90.6205,
                    'sectionProfile': [
                        [0, 2.9291],
                        [0, -2.9291],
                        [3.668, -0.8114],
                        [3.668, 0.8114]
                    ]
                }
            },
            'M95x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 43.5135,
                    'dSupport': 87.726,
                    'sectionProfile': [
                        [0, -2.6094],
                        [0, 2.6094],
                        [3.7965, 0.4175],
                        [3.7965, -0.4175]
                    ]
                },
                'sortSize': 95.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -48.133,
                    'dSupport': 95.633,
                    'sectionProfile': [
                        [0, 2.9327],
                        [0, -2.9327],
                        [3.6805, -0.8078],
                        [3.6805, 0.8078]
                    ]
                }
            },
            'M100x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 46.0135,
                    'dSupport': 92.726,
                    'sectionProfile': [
                        [0, -2.6094],
                        [0, 2.6094],
                        [3.7965, 0.4175],
                        [3.7965, -0.4175]
                    ]
                },
                'sortSize': 100.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -50.635,
                    'dSupport': 100.635,
                    'sectionProfile': [
                        [0, 2.9338],
                        [0, -2.9338],
                        [3.6825, -0.8078],
                        [3.6825, 0.8078]
                    ]
                }
            },
            'M105x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 48.5135,
                    'dSupport': 97.726,
                    'sectionProfile': [
                        [0, -2.6036],
                        [0, 2.6036],
                        [3.7865, 0.4175],
                        [3.7865, -0.4175]
                    ]
                },
                'sortSize': 105.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -53.135,
                    'dSupport': 105.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.6825, -0.8086],
                        [3.6825, 0.8086]
                    ]
                }
            },
            'M110x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 51.015,
                    'dSupport': 102.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 110.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -55.635,
                    'dSupport': 110.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M115x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 53.515,
                    'dSupport': 107.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 115.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -58.135,
                    'dSupport': 115.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M120x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 56.015,
                    'dSupport': 112.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 120.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -60.635,
                    'dSupport': 120.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M125x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 57.22,
                    'dSupport': 115.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 125.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -63.305,
                    'dSupport': 125.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M130x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 59.72,
                    'dSupport': 120.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 130.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -65.805,
                    'dSupport': 130.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M135x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 63.515,
                    'dSupport': 127.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 135.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -68.135,
                    'dSupport': 135.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M140x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 64.72,
                    'dSupport': 130.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 140.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -70.805,
                    'dSupport': 140.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M145x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 68.515,
                    'dSupport': 137.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 145.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -73.135,
                    'dSupport': 145.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M150x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 69.72,
                    'dSupport': 140.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 150.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -75.805,
                    'dSupport': 150.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M155x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 73.515,
                    'dSupport': 147.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 155.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -78.135,
                    'dSupport': 155.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M160x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 74.72,
                    'dSupport': 150.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 160.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -80.805,
                    'dSupport': 160.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M165x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 78.515,
                    'dSupport': 157.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 165.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -83.135,
                    'dSupport': 165.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M170x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 79.72,
                    'dSupport': 160.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 170.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -85.805,
                    'dSupport': 170.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M175x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 83.515,
                    'dSupport': 167.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 175.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -88.135,
                    'dSupport': 175.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M180x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 84.72,
                    'dSupport': 170.34,
                    'sectionProfile': [
                        [0, -3.4751],
                        [0, 3.4751],
                        [5.055, 0.5566],
                        [5.055, -0.5566]
                    ]
                },
                'sortSize': 180.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -90.805,
                    'dSupport': 180.805,
                    'sectionProfile': [
                        [0, 3.9009],
                        [0, -3.9009],
                        [4.885, -1.0806],
                        [4.885, 1.0806]
                    ]
                }
            },
            'M185x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 88.505,
                    'dSupport': 177.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 185.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -93.145,
                    'dSupport': 185.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M190x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 89.71,
                    'dSupport': 180.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 190.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -95.815,
                    'dSupport': 190.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M195x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 93.505,
                    'dSupport': 187.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 195.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -98.145,
                    'dSupport': 195.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M200x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 94.71,
                    'dSupport': 190.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 200.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -100.815,
                    'dSupport': 200.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M205x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 98.505,
                    'dSupport': 197.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 205.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -103.145,
                    'dSupport': 205.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M210x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 99.71,
                    'dSupport': 200.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 210.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -105.815,
                    'dSupport': 210.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M215x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 103.505,
                    'dSupport': 207.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 215.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -108.145,
                    'dSupport': 215.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M220x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 104.71,
                    'dSupport': 210.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 220.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -110.815,
                    'dSupport': 220.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M225x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 108.505,
                    'dSupport': 217.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.845, 0.3886],
                        [3.845, -0.3886]
                    ]
                },
                'sortSize': 225.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -113.145,
                    'dSupport': 225.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M230x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 111.005,
                    'dSupport': 222.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 230.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -115.645,
                    'dSupport': 230.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M235x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 113.485,
                    'dSupport': 227.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 235.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -118.17,
                    'dSupport': 235.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            },
            'M240x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 114.71,
                    'dSupport': 230.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 240.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -120.815,
                    'dSupport': 240.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M245x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 118.505,
                    'dSupport': 237.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 245.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -123.145,
                    'dSupport': 245.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M250x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 119.71,
                    'dSupport': 240.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 250.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -125.815,
                    'dSupport': 250.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M255x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 123.485,
                    'dSupport': 247.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 255.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -128.17,
                    'dSupport': 255.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            },
            'M260x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 124.71,
                    'dSupport': 250.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 260.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -130.815,
                    'dSupport': 260.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M265x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 128.505,
                    'dSupport': 257.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 265.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -133.145,
                    'dSupport': 265.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M270x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 131.005,
                    'dSupport': 262.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 270.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -135.645,
                    'dSupport': 270.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M275x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 133.505,
                    'dSupport': 267.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 275.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -138.145,
                    'dSupport': 275.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M280x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 134.71,
                    'dSupport': 270.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 280.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -140.815,
                    'dSupport': 280.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M285x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 138.505,
                    'dSupport': 277.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 285.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -143.145,
                    'dSupport': 285.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M290x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 141.005,
                    'dSupport': 282.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 290.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -145.645,
                    'dSupport': 290.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M295x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 143.505,
                    'dSupport': 287.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 295.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -148.145,
                    'dSupport': 295.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M300x8': {
                'ext': {
                    'pitch': 8,
                    'rRotation': 144.71,
                    'dSupport': 290.33,
                    'sectionProfile': [
                        [0, -3.4665],
                        [0, 3.4665],
                        [5.065, 0.5422],
                        [5.065, -0.5422]
                    ]
                },
                'sortSize': 300.0,
                'int': {
                    'pitch': 8,
                    'rRotation': -150.815,
                    'dSupport': 300.815,
                    'sectionProfile': [
                        [0, 3.9024],
                        [0, -3.9024],
                        [4.895, -1.0762],
                        [4.895, 1.0762]
                    ]
                }
            },
            'M310x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 151.005,
                    'dSupport': 302.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 310.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -155.645,
                    'dSupport': 310.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M320x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 156.005,
                    'dSupport': 312.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 320.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -160.645,
                    'dSupport': 320.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M330x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 161.005,
                    'dSupport': 322.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 330.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -165.645,
                    'dSupport': 330.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M340x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 166.005,
                    'dSupport': 332.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 340.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -170.645,
                    'dSupport': 340.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M350x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 171.005,
                    'dSupport': 342.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 350.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -175.645,
                    'dSupport': 350.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M360x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 175.985,
                    'dSupport': 352.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 360.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -180.67,
                    'dSupport': 360.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            },
            'M370x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 180.985,
                    'dSupport': 362.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 370.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -185.67,
                    'dSupport': 370.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            },
            'M380x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 185.985,
                    'dSupport': 372.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 380.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -190.67,
                    'dSupport': 380.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            },
            'M390x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 190.985,
                    'dSupport': 382.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 390.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -195.67,
                    'dSupport': 390.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            },
            'M400x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 195.985,
                    'dSupport': 392.7,
                    'sectionProfile': [
                        [0, -2.6201],
                        [0, 2.6201],
                        [3.815, 0.4175],
                        [3.815, -0.4175]
                    ]
                },
                'sortSize': 400.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -200.67,
                    'dSupport': 400.67,
                    'sectionProfile': [
                        [0, 2.9434],
                        [0, -2.9434],
                        [3.715, -0.7985],
                        [3.715, 0.7985]
                    ]
                }
            }
        },
        'fine': {
            'M0.3x0.08': {
                'ext': {
                    'pitch': 0.08,
                    'rRotation': 0.0915,
                    'dSupport': 0.1935,
                    'sectionProfile': [
                        [0, -0.0367],
                        [0, 0.0367],
                        [0.0545, 0.0053],
                        [0.0545, -0.0053]
                    ]
                },
                'sortSize': 0.3,
                'int': {
                    'pitch': 0.08,
                    'rRotation': -0.1614,
                    'dSupport': 0.3165,
                    'sectionProfile': [
                        [0, 0.0396],
                        [0, -0.0396],
                        [0.0437, -0.0144],
                        [0.0437, 0.0144]
                    ]
                }
            },
            'M1.1x0.2': {
                'ext': {
                    'pitch': 0.2,
                    'rRotation': 0.391,
                    'dSupport': 0.824,
                    'sectionProfile': [
                        [0, -0.0924],
                        [0, 0.0924],
                        [0.1365, 0.0136],
                        [0.1365, -0.0136]
                    ]
                },
                'sortSize': 1.1,
                'int': {
                    'pitch': 0.2,
                    'rRotation': -0.5856,
                    'dSupport': 1.146,
                    'sectionProfile': [
                        [0, 0.099],
                        [0, -0.099],
                        [0.1254, -0.0266],
                        [0.1254, 0.0266]
                    ]
                }
            },
            'M1.6x0.2': {
                'ext': {
                    'pitch': 0.2,
                    'rRotation': 0.64,
                    'dSupport': 1.323,
                    'sectionProfile': [
                        [0, -0.0927],
                        [0, 0.0927],
                        [0.1375, 0.0133],
                        [0.1375, -0.0133]
                    ]
                },
                'sortSize': 1.6,
                'int': {
                    'pitch': 0.2,
                    'rRotation': -0.8366,
                    'dSupport': 1.648,
                    'sectionProfile': [
                        [0, 0.099],
                        [0, -0.099],
                        [0.1264, -0.026],
                        [0.1264, 0.026]
                    ]
                }
            },
            'M2.3x0.4': {
                'ext': {
                    'pitch': 0.4,
                    'rRotation': 0.854,
                    'dSupport': 1.778,
                    'sectionProfile': [
                        [0, -0.1807],
                        [0, 0.1807],
                        [0.2628, 0.029],
                        [0.2628, -0.029]
                    ]
                },
                'sortSize': 2.3,
                'int': {
                    'pitch': 0.4,
                    'rRotation': -1.2122,
                    'dSupport': 2.374,
                    'sectionProfile': [
                        [0, 0.198],
                        [0, -0.198],
                        [0.2507, -0.0532],
                        [0.2507, 0.0532]
                    ]
                }
            },
            'M4.5x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 1.886,
                    'dSupport': 3.8555,
                    'sectionProfile': [
                        [0, -0.2247],
                        [0, 0.2247],
                        [0.3275, 0.0357],
                        [0.3275, -0.0357]
                    ]
                },
                'sortSize': 4.5,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -2.3247,
                    'dSupport': 4.586,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3102, -0.0684],
                        [0.3102, 0.0684]
                    ]
                }
            },
            'M6x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 2.4645,
                    'dSupport': 5.0475,
                    'sectionProfile': [
                        [0, -0.3353],
                        [0, 0.3353],
                        [0.4895, 0.0527],
                        [0.4895, -0.0527]
                    ]
                },
                'sortSize': 6.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -3.1078,
                    'dSupport': 6.12,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4663, -0.1021],
                        [0.4663, 0.1021]
                    ]
                }
            },
            'M6x0.7': {
                'ext': {
                    'pitch': 0.7,
                    'rRotation': 2.4985,
                    'dSupport': 5.1085,
                    'sectionProfile': [
                        [0, -0.3131],
                        [0, 0.3131],
                        [0.4555, 0.0501],
                        [0.4555, -0.0501]
                    ]
                },
                'sortSize': 6.0,
                'int': {
                    'pitch': 0.7,
                    'rRotation': -3.101,
                    'dSupport': 6.113,
                    'sectionProfile': [
                        [0, 0.3465],
                        [0, -0.3465],
                        [0.435, -0.0953],
                        [0.435, 0.0953]
                    ]
                }
            },
            'M6x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 2.631,
                    'dSupport': 5.3505,
                    'sectionProfile': [
                        [0, -0.2262],
                        [0, 0.2262],
                        [0.3325, 0.0342],
                        [0.3325, -0.0342]
                    ]
                },
                'sortSize': 6.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -3.0777,
                    'dSupport': 6.092,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3132, -0.0667],
                        [0.3132, 0.0667]
                    ]
                }
            },
            'M7x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 3.131,
                    'dSupport': 6.3505,
                    'sectionProfile': [
                        [0, -0.2262],
                        [0, 0.2262],
                        [0.3325, 0.0342],
                        [0.3325, -0.0342]
                    ]
                },
                'sortSize': 7.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -3.5777,
                    'dSupport': 7.092,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3132, -0.0667],
                        [0.3132, 0.0667]
                    ]
                }
            },
            'M8x0.8': {
                'ext': {
                    'pitch': 0.8,
                    'rRotation': 3.429,
                    'dSupport': 6.984,
                    'sectionProfile': [
                        [0, -0.3573],
                        [0, 0.3573],
                        [0.5215, 0.0562],
                        [0.5215, -0.0562]
                    ]
                },
                'sortSize': 8.0,
                'int': {
                    'pitch': 0.8,
                    'rRotation': -4.1145,
                    'dSupport': 8.1275,
                    'sectionProfile': [
                        [0, 0.396],
                        [0, -0.396],
                        [0.4975, -0.1088],
                        [0.4975, 0.1088]
                    ]
                }
            },
            'M8x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 3.4645,
                    'dSupport': 7.0475,
                    'sectionProfile': [
                        [0, -0.3353],
                        [0, 0.3353],
                        [0.4895, 0.0527],
                        [0.4895, -0.0527]
                    ]
                },
                'sortSize': 8.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -4.1078,
                    'dSupport': 8.12,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4663, -0.1021],
                        [0.4663, 0.1021]
                    ]
                }
            },
            'M8x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 3.631,
                    'dSupport': 7.3505,
                    'sectionProfile': [
                        [0, -0.2262],
                        [0, 0.2262],
                        [0.3325, 0.0342],
                        [0.3325, -0.0342]
                    ]
                },
                'sortSize': 8.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -4.0777,
                    'dSupport': 8.092,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3132, -0.0667],
                        [0.3132, 0.0667]
                    ]
                }
            },
            'M9x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 3.798,
                    'dSupport': 7.7435,
                    'sectionProfile': [
                        [0, -0.444],
                        [0, 0.444],
                        [0.644, 0.0722],
                        [0.644, -0.0722]
                    ]
                },
                'sortSize': 9.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -4.6364,
                    'dSupport': 9.146,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6189, -0.1377],
                        [0.6189, 0.1377]
                    ]
                }
            },
            'M9x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 3.9645,
                    'dSupport': 8.0475,
                    'sectionProfile': [
                        [0, -0.3353],
                        [0, 0.3353],
                        [0.4895, 0.0527],
                        [0.4895, -0.0527]
                    ]
                },
                'sortSize': 9.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -4.6078,
                    'dSupport': 9.12,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4663, -0.1021],
                        [0.4663, 0.1021]
                    ]
                }
            },
            'M9x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 4.131,
                    'dSupport': 8.3505,
                    'sectionProfile': [
                        [0, -0.2262],
                        [0, 0.2262],
                        [0.3325, 0.0342],
                        [0.3325, -0.0342]
                    ]
                },
                'sortSize': 9.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -4.5777,
                    'dSupport': 9.092,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3132, -0.0667],
                        [0.3132, 0.0667]
                    ]
                }
            },
            'M10x1.12': {
                'ext': {
                    'pitch': 1.12,
                    'rRotation': 4.219,
                    'dSupport': 8.5995,
                    'sectionProfile': [
                        [0, -0.4962],
                        [0, 0.4962],
                        [0.72, 0.0805],
                        [0.72, -0.0805]
                    ]
                },
                'sortSize': 10.0,
                'int': {
                    'pitch': 1.12,
                    'rRotation': -5.1518,
                    'dSupport': 10.161,
                    'sectionProfile': [
                        [0, 0.5544],
                        [0, -0.5544],
                        [0.6953, -0.153],
                        [0.6953, 0.153]
                    ]
                }
            },
            'M10x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 4.298,
                    'dSupport': 8.7435,
                    'sectionProfile': [
                        [0, -0.444],
                        [0, 0.444],
                        [0.644, 0.0722],
                        [0.644, -0.0722]
                    ]
                },
                'sortSize': 10.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -5.1369,
                    'dSupport': 10.147,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6194, -0.1374],
                        [0.6194, 0.1374]
                    ]
                }
            },
            'M10x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 4.4645,
                    'dSupport': 9.0475,
                    'sectionProfile': [
                        [0, -0.3353],
                        [0, 0.3353],
                        [0.4895, 0.0527],
                        [0.4895, -0.0527]
                    ]
                },
                'sortSize': 10.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -5.1078,
                    'dSupport': 10.12,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4663, -0.1021],
                        [0.4663, 0.1021]
                    ]
                }
            },
            'M10x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 4.631,
                    'dSupport': 9.3505,
                    'sectionProfile': [
                        [0, -0.2262],
                        [0, 0.2262],
                        [0.3325, 0.0342],
                        [0.3325, -0.0342]
                    ]
                },
                'sortSize': 10.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -5.0777,
                    'dSupport': 10.092,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3132, -0.0667],
                        [0.3132, 0.0667]
                    ]
                }
            },
            'M11x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 4.798,
                    'dSupport': 9.7435,
                    'sectionProfile': [
                        [0, -0.4431],
                        [0, 0.4431],
                        [0.642, 0.0725],
                        [0.642, -0.0725]
                    ]
                },
                'sortSize': 11.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -5.6369,
                    'dSupport': 11.147,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6194, -0.1374],
                        [0.6194, 0.1374]
                    ]
                }
            },
            'M11x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 4.9645,
                    'dSupport': 10.0475,
                    'sectionProfile': [
                        [0, -0.335],
                        [0, 0.335],
                        [0.4905, 0.0518],
                        [0.4905, -0.0518]
                    ]
                },
                'sortSize': 11.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -5.6078,
                    'dSupport': 11.12,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4663, -0.1021],
                        [0.4663, 0.1021]
                    ]
                }
            },
            'M11x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 5.131,
                    'dSupport': 10.3505,
                    'sectionProfile': [
                        [0, -0.2269],
                        [0, 0.2269],
                        [0.3315, 0.0355],
                        [0.3315, -0.0355]
                    ]
                },
                'sortSize': 11.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -5.5777,
                    'dSupport': 11.092,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3132, -0.0667],
                        [0.3132, 0.0667]
                    ]
                }
            },
            'M12x1.25': {
                'ext': {
                    'pitch': 1.25,
                    'rRotation': 5.129,
                    'dSupport': 10.4385,
                    'sectionProfile': [
                        [0, -0.5541],
                        [0, 0.5541],
                        [0.8035, 0.0902],
                        [0.8035, -0.0902]
                    ]
                },
                'sortSize': 12.0,
                'int': {
                    'pitch': 1.25,
                    'rRotation': -6.1694,
                    'dSupport': 12.18,
                    'sectionProfile': [
                        [0, 0.6188],
                        [0, -0.6188],
                        [0.7797, -0.1686],
                        [0.7797, 0.1686]
                    ]
                }
            },
            'M12x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 5.295,
                    'dSupport': 10.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 12.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -6.1394,
                    'dSupport': 12.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M12x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 5.4615,
                    'dSupport': 11.0445,
                    'sectionProfile': [
                        [0, -0.3367],
                        [0, 0.3367],
                        [0.4935, 0.0518],
                        [0.4935, -0.0518]
                    ]
                },
                'sortSize': 12.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -6.1098,
                    'dSupport': 12.124,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4683, -0.1009],
                        [0.4683, 0.1009]
                    ]
                }
            },
            'M12x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 5.6285,
                    'dSupport': 11.348,
                    'sectionProfile': [
                        [0, -0.2283],
                        [0, 0.2283],
                        [0.334, 0.0355],
                        [0.334, -0.0355]
                    ]
                },
                'sortSize': 12.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -6.0797,
                    'dSupport': 12.096,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3152, -0.0655],
                        [0.3152, 0.0655]
                    ]
                }
            },
            'M14x1.25': {
                'ext': {
                    'pitch': 1.25,
                    'rRotation': 6.129,
                    'dSupport': 12.4385,
                    'sectionProfile': [
                        [0, -0.5541],
                        [0, 0.5541],
                        [0.8035, 0.0902],
                        [0.8035, -0.0902]
                    ]
                },
                'sortSize': 14.0,
                'int': {
                    'pitch': 1.25,
                    'rRotation': -7.1669,
                    'dSupport': 14.175,
                    'sectionProfile': [
                        [0, 0.6188],
                        [0, -0.6188],
                        [0.7772, -0.17],
                        [0.7772, 0.17]
                    ]
                }
            },
            'M14x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 6.295,
                    'dSupport': 12.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 14.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -7.1394,
                    'dSupport': 14.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M14x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 6.4615,
                    'dSupport': 13.0445,
                    'sectionProfile': [
                        [0, -0.3367],
                        [0, 0.3367],
                        [0.4935, 0.0518],
                        [0.4935, -0.0518]
                    ]
                },
                'sortSize': 14.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -7.1098,
                    'dSupport': 14.124,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4683, -0.1009],
                        [0.4683, 0.1009]
                    ]
                }
            },
            'M14x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 6.6285,
                    'dSupport': 13.348,
                    'sectionProfile': [
                        [0, -0.2283],
                        [0, 0.2283],
                        [0.334, 0.0355],
                        [0.334, -0.0355]
                    ]
                },
                'sortSize': 14.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -7.0797,
                    'dSupport': 14.096,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3152, -0.0655],
                        [0.3152, 0.0655]
                    ]
                }
            },
            'M15x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 6.795,
                    'dSupport': 13.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 15.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -7.6394,
                    'dSupport': 15.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M16x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 6.965,
                    'dSupport': 14.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 16.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -8.197,
                    'dSupport': 16.203,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M16x1.25': {
                'ext': {
                    'pitch': 1.25,
                    'rRotation': 7.129,
                    'dSupport': 14.4385,
                    'sectionProfile': [
                        [0, -0.5541],
                        [0, 0.5541],
                        [0.8035, 0.0902],
                        [0.8035, -0.0902]
                    ]
                },
                'sortSize': 16.0,
                'int': {
                    'pitch': 1.25,
                    'rRotation': -8.1669,
                    'dSupport': 16.175,
                    'sectionProfile': [
                        [0, 0.6188],
                        [0, -0.6188],
                        [0.7772, -0.17],
                        [0.7772, 0.17]
                    ]
                }
            },
            'M16x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 7.295,
                    'dSupport': 14.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 16.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -8.1394,
                    'dSupport': 16.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M16x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 7.4615,
                    'dSupport': 15.0445,
                    'sectionProfile': [
                        [0, -0.3367],
                        [0, 0.3367],
                        [0.4935, 0.0518],
                        [0.4935, -0.0518]
                    ]
                },
                'sortSize': 16.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -8.1098,
                    'dSupport': 16.124,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4683, -0.1009],
                        [0.4683, 0.1009]
                    ]
                }
            },
            'M16x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 7.6285,
                    'dSupport': 15.348,
                    'sectionProfile': [
                        [0, -0.2283],
                        [0, 0.2283],
                        [0.334, 0.0355],
                        [0.334, -0.0355]
                    ]
                },
                'sortSize': 16.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -8.0797,
                    'dSupport': 16.096,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3152, -0.0655],
                        [0.3152, 0.0655]
                    ]
                }
            },
            'M17x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 7.795,
                    'dSupport': 15.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 17.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -8.6394,
                    'dSupport': 17.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M18x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 7.965,
                    'dSupport': 16.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 18.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -9.197,
                    'dSupport': 18.203,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M18x1.25': {
                'ext': {
                    'pitch': 1.25,
                    'rRotation': 8.129,
                    'dSupport': 16.4385,
                    'sectionProfile': [
                        [0, -0.5541],
                        [0, 0.5541],
                        [0.8035, 0.0902],
                        [0.8035, -0.0902]
                    ]
                },
                'sortSize': 18.0,
                'int': {
                    'pitch': 1.25,
                    'rRotation': -9.1669,
                    'dSupport': 18.175,
                    'sectionProfile': [
                        [0, 0.6188],
                        [0, -0.6188],
                        [0.7772, -0.17],
                        [0.7772, 0.17]
                    ]
                }
            },
            'M18x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 8.295,
                    'dSupport': 16.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 18.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -9.1394,
                    'dSupport': 18.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M18x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 8.4615,
                    'dSupport': 17.0445,
                    'sectionProfile': [
                        [0, -0.3367],
                        [0, 0.3367],
                        [0.4935, 0.0518],
                        [0.4935, -0.0518]
                    ]
                },
                'sortSize': 18.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -9.1098,
                    'dSupport': 18.124,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4683, -0.1009],
                        [0.4683, 0.1009]
                    ]
                }
            },
            'M18x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 8.6285,
                    'dSupport': 17.348,
                    'sectionProfile': [
                        [0, -0.2283],
                        [0, 0.2283],
                        [0.334, 0.0355],
                        [0.334, -0.0355]
                    ]
                },
                'sortSize': 18.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -9.0797,
                    'dSupport': 18.096,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3152, -0.0655],
                        [0.3152, 0.0655]
                    ]
                }
            },
            'M20x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 8.965,
                    'dSupport': 18.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 20.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -10.197,
                    'dSupport': 20.203,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M20x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 9.295,
                    'dSupport': 18.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 20.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -10.1394,
                    'dSupport': 20.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M20x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 9.4615,
                    'dSupport': 19.0445,
                    'sectionProfile': [
                        [0, -0.3367],
                        [0, 0.3367],
                        [0.4935, 0.0518],
                        [0.4935, -0.0518]
                    ]
                },
                'sortSize': 20.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -10.1098,
                    'dSupport': 20.124,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4683, -0.1009],
                        [0.4683, 0.1009]
                    ]
                }
            },
            'M20x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 9.6285,
                    'dSupport': 19.348,
                    'sectionProfile': [
                        [0, -0.2283],
                        [0, 0.2283],
                        [0.334, 0.0355],
                        [0.334, -0.0355]
                    ]
                },
                'sortSize': 20.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -10.0797,
                    'dSupport': 20.096,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3152, -0.0655],
                        [0.3152, 0.0655]
                    ]
                }
            },
            'M22x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 9.6355,
                    'dSupport': 19.534,
                    'sectionProfile': [
                        [0, -0.8779],
                        [0, 0.8779],
                        [1.2745, 0.142],
                        [1.2745, -0.142]
                    ]
                },
                'sortSize': 22.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -11.2505,
                    'dSupport': 22.2505,
                    'sectionProfile': [
                        [0, 0.989],
                        [0, -0.989],
                        [1.2393, -0.2735],
                        [1.2393, 0.2735]
                    ]
                }
            },
            'M22x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 9.965,
                    'dSupport': 20.137,
                    'sectionProfile': [
                        [0, -0.6608],
                        [0, 0.6608],
                        [0.96, 0.1065],
                        [0.96, -0.1065]
                    ]
                },
                'sortSize': 22.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -11.197,
                    'dSupport': 22.203,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.934, -0.2032],
                        [0.934, 0.2032]
                    ]
                }
            },
            'M22x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 10.295,
                    'dSupport': 20.7405,
                    'sectionProfile': [
                        [0, -0.4449],
                        [0, 0.4449],
                        [0.645, 0.0725],
                        [0.645, -0.0725]
                    ]
                },
                'sortSize': 22.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -11.1394,
                    'dSupport': 22.152,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6219, -0.136],
                        [0.6219, 0.136]
                    ]
                }
            },
            'M22x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 10.4615,
                    'dSupport': 21.0445,
                    'sectionProfile': [
                        [0, -0.3367],
                        [0, 0.3367],
                        [0.4935, 0.0518],
                        [0.4935, -0.0518]
                    ]
                },
                'sortSize': 22.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -11.1098,
                    'dSupport': 22.124,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4683, -0.1009],
                        [0.4683, 0.1009]
                    ]
                }
            },
            'M22x0.5': {
                'ext': {
                    'pitch': 0.5,
                    'rRotation': 10.6285,
                    'dSupport': 21.348,
                    'sectionProfile': [
                        [0, -0.2283],
                        [0, 0.2283],
                        [0.334, 0.0355],
                        [0.334, -0.0355]
                    ]
                },
                'sortSize': 22.0,
                'int': {
                    'pitch': 0.5,
                    'rRotation': -11.0797,
                    'dSupport': 22.096,
                    'sectionProfile': [
                        [0, 0.2475],
                        [0, -0.2475],
                        [0.3152, -0.0655],
                        [0.3152, 0.0655]
                    ]
                }
            },
            'M24x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 10.6305,
                    'dSupport': 21.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 24.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -12.2552,
                    'dSupport': 24.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M24x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 10.96,
                    'dSupport': 22.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 24.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -12.1995,
                    'dSupport': 24.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M24x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 11.2915,
                    'dSupport': 22.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 24.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -12.1419,
                    'dSupport': 24.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M24x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 11.4585,
                    'dSupport': 23.0415,
                    'sectionProfile': [
                        [0, -0.337],
                        [0, 0.337],
                        [0.4965, 0.0504],
                        [0.4965, -0.0504]
                    ]
                },
                'sortSize': 24.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -12.1123,
                    'dSupport': 24.129,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4708, -0.0995],
                        [0.4708, 0.0995]
                    ]
                }
            },
            'M25x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 11.46,
                    'dSupport': 23.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 25.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -12.6995,
                    'dSupport': 25.208,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M25x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 11.7915,
                    'dSupport': 23.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 25.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -12.6419,
                    'dSupport': 25.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M27x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 12.46,
                    'dSupport': 25.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 27.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -13.6995,
                    'dSupport': 27.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M27x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 12.7915,
                    'dSupport': 25.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 27.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -13.6419,
                    'dSupport': 27.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M27x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 12.9585,
                    'dSupport': 26.0415,
                    'sectionProfile': [
                        [0, -0.337],
                        [0, 0.337],
                        [0.4965, 0.0504],
                        [0.4965, -0.0504]
                    ]
                },
                'sortSize': 27.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -13.6123,
                    'dSupport': 27.129,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4708, -0.0995],
                        [0.4708, 0.0995]
                    ]
                }
            },
            'M28x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 12.96,
                    'dSupport': 26.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 28.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -14.1995,
                    'dSupport': 28.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M28x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 13.2915,
                    'dSupport': 26.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 28.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -14.1419,
                    'dSupport': 28.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M30x2.5': {
                'ext': {
                    'pitch': 2.5,
                    'rRotation': 13.302,
                    'dSupport': 26.928,
                    'sectionProfile': [
                        [0, -1.0958],
                        [0, 1.0958],
                        [1.593, 0.1761],
                        [1.593, -0.1761]
                    ]
                },
                'sortSize': 30.0,
                'int': {
                    'pitch': 2.5,
                    'rRotation': -15.3055,
                    'dSupport': 30.3055,
                    'sectionProfile': [
                        [0, 1.2341],
                        [0, -1.2341],
                        [1.546, -0.3415],
                        [1.546, 0.3415]
                    ]
                }
            },
            'M30x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 13.6305,
                    'dSupport': 27.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 30.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -15.2552,
                    'dSupport': 30.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M30x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 13.96,
                    'dSupport': 28.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 30.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -15.1995,
                    'dSupport': 30.208,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M30x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 14.2915,
                    'dSupport': 28.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 30.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -15.1419,
                    'dSupport': 30.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M30x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 14.4585,
                    'dSupport': 29.0415,
                    'sectionProfile': [
                        [0, -0.337],
                        [0, 0.337],
                        [0.4965, 0.0504],
                        [0.4965, -0.0504]
                    ]
                },
                'sortSize': 30.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -15.1123,
                    'dSupport': 30.129,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4708, -0.0995],
                        [0.4708, 0.0995]
                    ]
                }
            },
            'M32x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 14.96,
                    'dSupport': 30.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 32.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -16.1995,
                    'dSupport': 32.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M33x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 15.1305,
                    'dSupport': 30.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 33.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -16.7552,
                    'dSupport': 33.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M33x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 15.46,
                    'dSupport': 31.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 33.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -16.6995,
                    'dSupport': 33.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M33x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 15.7915,
                    'dSupport': 31.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 33.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -16.6419,
                    'dSupport': 33.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M33x0.75': {
                'ext': {
                    'pitch': 0.75,
                    'rRotation': 15.9585,
                    'dSupport': 32.0415,
                    'sectionProfile': [
                        [0, -0.337],
                        [0, 0.337],
                        [0.4965, 0.0504],
                        [0.4965, -0.0504]
                    ]
                },
                'sortSize': 33.0,
                'int': {
                    'pitch': 0.75,
                    'rRotation': -16.6123,
                    'dSupport': 33.129,
                    'sectionProfile': [
                        [0, 0.3712],
                        [0, -0.3712],
                        [0.4708, -0.0995],
                        [0.4708, 0.0995]
                    ]
                }
            },
            'M36x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 16.6305,
                    'dSupport': 33.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 36.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -18.2552,
                    'dSupport': 36.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M36x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 16.96,
                    'dSupport': 34.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 36.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -18.1995,
                    'dSupport': 36.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M36x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 17.2915,
                    'dSupport': 34.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 36.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -18.1419,
                    'dSupport': 36.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M39x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 18.1305,
                    'dSupport': 36.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 39.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -19.7552,
                    'dSupport': 39.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M39x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 18.46,
                    'dSupport': 37.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 39.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -19.6995,
                    'dSupport': 39.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M39x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 18.7915,
                    'dSupport': 37.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 39.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -19.6419,
                    'dSupport': 39.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M40x2.5': {
                'ext': {
                    'pitch': 2.5,
                    'rRotation': 18.302,
                    'dSupport': 36.928,
                    'sectionProfile': [
                        [0, -1.0958],
                        [0, 1.0958],
                        [1.593, 0.1761],
                        [1.593, -0.1761]
                    ]
                },
                'sortSize': 40.0,
                'int': {
                    'pitch': 2.5,
                    'rRotation': -20.3055,
                    'dSupport': 40.3055,
                    'sectionProfile': [
                        [0, 1.2341],
                        [0, -1.2341],
                        [1.546, -0.3415],
                        [1.546, 0.3415]
                    ]
                }
            },
            'M40x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 18.6305,
                    'dSupport': 37.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 40.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -20.2552,
                    'dSupport': 40.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M40x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 18.96,
                    'dSupport': 38.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 40.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -20.1995,
                    'dSupport': 40.208,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M42x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 18.9775,
                    'dSupport': 38.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 42.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -21.349,
                    'dSupport': 42.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M42x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 19.6305,
                    'dSupport': 39.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 42.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -21.2552,
                    'dSupport': 42.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M42x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 19.96,
                    'dSupport': 40.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 42.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -21.1995,
                    'dSupport': 42.2085,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M42x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 20.2915,
                    'dSupport': 40.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 42.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -21.1419,
                    'dSupport': 42.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M45x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 20.4775,
                    'dSupport': 41.3295,
                    'sectionProfile': [
                        [0, -1.3115],
                        [0, 1.3115],
                        [1.905, 0.2116],
                        [1.905, -0.2116]
                    ]
                },
                'sortSize': 45.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -22.849,
                    'dSupport': 45.349,
                    'sectionProfile': [
                        [0, 1.4759],
                        [0, -1.4759],
                        [1.848, -0.4089],
                        [1.848, 0.4089]
                    ]
                }
            },
            'M45x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 21.1305,
                    'dSupport': 42.529,
                    'sectionProfile': [
                        [0, -0.8793],
                        [0, 0.8793],
                        [1.2795, 0.1406],
                        [1.2795, -0.1406]
                    ]
                },
                'sortSize': 45.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -22.7552,
                    'dSupport': 45.2565,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.244, -0.2718],
                        [1.244, 0.2718]
                    ]
                }
            },
            'M45x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 21.46,
                    'dSupport': 43.132,
                    'sectionProfile': [
                        [0, -0.6622],
                        [0, 0.6622],
                        [0.965, 0.1051],
                        [0.965, -0.1051]
                    ]
                },
                'sortSize': 45.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -22.6995,
                    'dSupport': 45.208,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9365, -0.2018],
                        [0.9365, 0.2018]
                    ]
                }
            },
            'M45x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 21.7915,
                    'dSupport': 43.737,
                    'sectionProfile': [
                        [0, -0.4454],
                        [0, 0.4454],
                        [0.6485, 0.071],
                        [0.6485, -0.071]
                    ]
                },
                'sortSize': 45.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -22.6419,
                    'dSupport': 45.157,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6244, -0.1345],
                        [0.6244, 0.1345]
                    ]
                }
            },
            'M48x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 21.9715,
                    'dSupport': 44.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 48.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -24.3565,
                    'dSupport': 48.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M48x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 22.6255,
                    'dSupport': 45.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 48.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -24.2582,
                    'dSupport': 48.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M48x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 22.955,
                    'dSupport': 46.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 48.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -24.2025,
                    'dSupport': 48.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M50x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 22.9715,
                    'dSupport': 46.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 50.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -25.3565,
                    'dSupport': 50.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M50x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 23.6255,
                    'dSupport': 47.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 50.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -25.2582,
                    'dSupport': 50.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M50x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 23.955,
                    'dSupport': 48.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 50.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -25.2025,
                    'dSupport': 50.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M52x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 23.9715,
                    'dSupport': 48.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 52.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -26.3565,
                    'dSupport': 52.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M52x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 24.6255,
                    'dSupport': 49.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 52.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -26.2582,
                    'dSupport': 52.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M52x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 24.955,
                    'dSupport': 50.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 52.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -26.2025,
                    'dSupport': 52.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M55x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 25.4715,
                    'dSupport': 51.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 55.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -27.8565,
                    'dSupport': 55.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M55x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 26.1255,
                    'dSupport': 52.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 55.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -27.7582,
                    'dSupport': 55.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M55x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 26.455,
                    'dSupport': 53.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 55.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -27.7025,
                    'dSupport': 55.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M56x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 25.9715,
                    'dSupport': 52.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 56.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -28.3565,
                    'dSupport': 56.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M56x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 26.6255,
                    'dSupport': 53.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 56.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -28.2582,
                    'dSupport': 56.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M56x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 26.955,
                    'dSupport': 54.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 56.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -28.2025,
                    'dSupport': 56.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M56x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 27.284,
                    'dSupport': 54.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 56.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -28.1469,
                    'dSupport': 56.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M58x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 26.9715,
                    'dSupport': 54.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 58.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -29.3565,
                    'dSupport': 58.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M58x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 27.6255,
                    'dSupport': 55.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 58.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -29.2582,
                    'dSupport': 58.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M58x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 27.955,
                    'dSupport': 56.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 58.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -29.2025,
                    'dSupport': 58.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M60x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 27.9715,
                    'dSupport': 56.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 60.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -30.3565,
                    'dSupport': 60.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M60x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 28.6255,
                    'dSupport': 57.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 60.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -30.2582,
                    'dSupport': 60.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M60x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 28.955,
                    'dSupport': 58.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 60.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -30.2025,
                    'dSupport': 60.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M60x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 29.284,
                    'dSupport': 58.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 60.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -30.1469,
                    'dSupport': 60.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M62x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 28.9715,
                    'dSupport': 58.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 62.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -31.3565,
                    'dSupport': 62.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M62x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 29.6255,
                    'dSupport': 59.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 62.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -31.2582,
                    'dSupport': 62.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M62x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 29.955,
                    'dSupport': 60.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 62.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -31.2025,
                    'dSupport': 62.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M64x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 29.321,
                    'dSupport': 59.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 64.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -32.446,
                    'dSupport': 64.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M64x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 29.9715,
                    'dSupport': 60.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 64.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -32.3565,
                    'dSupport': 64.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M64x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 30.6255,
                    'dSupport': 61.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 64.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -32.2582,
                    'dSupport': 64.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M64x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 30.955,
                    'dSupport': 62.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 64.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -32.2025,
                    'dSupport': 64.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M64x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 31.284,
                    'dSupport': 62.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 64.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -32.1469,
                    'dSupport': 64.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M65x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 30.4715,
                    'dSupport': 61.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 65.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -32.8565,
                    'dSupport': 65.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M65x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 31.1255,
                    'dSupport': 62.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 65.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -32.7582,
                    'dSupport': 65.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M65x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 31.455,
                    'dSupport': 63.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 65.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -32.7025,
                    'dSupport': 65.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M68x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 31.321,
                    'dSupport': 63.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 68.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -34.446,
                    'dSupport': 68.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M68x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 31.9715,
                    'dSupport': 64.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 68.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -34.3565,
                    'dSupport': 68.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M68x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 32.6255,
                    'dSupport': 65.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 68.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -34.2582,
                    'dSupport': 68.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M68x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 32.955,
                    'dSupport': 66.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 68.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -34.2025,
                    'dSupport': 68.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M68x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 33.284,
                    'dSupport': 66.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 68.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -34.1469,
                    'dSupport': 68.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M70x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 32.321,
                    'dSupport': 65.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 70.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -35.446,
                    'dSupport': 70.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M70x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 32.9715,
                    'dSupport': 66.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 70.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -35.3565,
                    'dSupport': 70.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M70x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 33.6255,
                    'dSupport': 67.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 70.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -35.2582,
                    'dSupport': 70.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M70x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 33.955,
                    'dSupport': 68.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 70.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -35.2025,
                    'dSupport': 70.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M72x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 33.321,
                    'dSupport': 67.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 72.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -36.446,
                    'dSupport': 72.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M72x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 33.9715,
                    'dSupport': 68.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 72.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -36.3565,
                    'dSupport': 72.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M72x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 34.6255,
                    'dSupport': 69.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 72.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -36.2582,
                    'dSupport': 72.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M72x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 34.955,
                    'dSupport': 70.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 72.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -36.2025,
                    'dSupport': 72.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M72x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 35.284,
                    'dSupport': 70.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 72.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -36.1469,
                    'dSupport': 72.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M75x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 34.821,
                    'dSupport': 70.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 75.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -37.946,
                    'dSupport': 75.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M75x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 35.4715,
                    'dSupport': 71.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 75.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -37.8565,
                    'dSupport': 75.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M75x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 36.1255,
                    'dSupport': 72.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 75.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -37.7582,
                    'dSupport': 75.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M75x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 36.455,
                    'dSupport': 73.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 75.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -37.7025,
                    'dSupport': 75.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M76x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 35.321,
                    'dSupport': 71.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 76.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -38.446,
                    'dSupport': 76.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M76x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 35.9715,
                    'dSupport': 72.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 76.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -38.3565,
                    'dSupport': 76.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M76x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 36.6255,
                    'dSupport': 73.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 76.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -38.2582,
                    'dSupport': 76.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M76x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 36.955,
                    'dSupport': 74.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 76.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -38.2025,
                    'dSupport': 76.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M76x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 37.284,
                    'dSupport': 74.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 76.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -38.1469,
                    'dSupport': 76.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M80x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 37.321,
                    'dSupport': 75.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.499, 0.3028],
                        [2.499, -0.3028]
                    ]
                },
                'sortSize': 80.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -40.446,
                    'dSupport': 80.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M80x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 37.9715,
                    'dSupport': 76.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 80.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -40.3565,
                    'dSupport': 80.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M80x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 38.6255,
                    'dSupport': 77.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 80.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -40.2582,
                    'dSupport': 80.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M80x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 38.955,
                    'dSupport': 78.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 80.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -40.2025,
                    'dSupport': 80.214,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M80x1': {
                'ext': {
                    'pitch': 1,
                    'rRotation': 39.284,
                    'dSupport': 78.7295,
                    'sectionProfile': [
                        [0, -0.4469],
                        [0, 0.4469],
                        [0.656, 0.0681],
                        [0.656, -0.0681]
                    ]
                },
                'sortSize': 80.0,
                'int': {
                    'pitch': 1,
                    'rRotation': -40.1469,
                    'dSupport': 80.167,
                    'sectionProfile': [
                        [0, 0.495],
                        [0, -0.495],
                        [0.6294, -0.1316],
                        [0.6294, 0.1316]
                    ]
                }
            },
            'M85x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 39.821,
                    'dSupport': 80.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 85.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -42.946,
                    'dSupport': 85.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M85x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 40.4715,
                    'dSupport': 81.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 85.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -42.8565,
                    'dSupport': 85.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M85x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 41.1255,
                    'dSupport': 82.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 85.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -42.7582,
                    'dSupport': 85.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M85x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 41.455,
                    'dSupport': 83.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 85.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -42.7025,
                    'dSupport': 85.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M90x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 42.321,
                    'dSupport': 85.126,
                    'sectionProfile': [
                        [0, -1.7456],
                        [0, 1.7456],
                        [2.5315, 0.2841],
                        [2.5315, -0.2841]
                    ]
                },
                'sortSize': 90.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -45.446,
                    'dSupport': 90.446,
                    'sectionProfile': [
                        [0, 1.962],
                        [0, -1.962],
                        [2.461, -0.5412],
                        [2.461, 0.5412]
                    ]
                }
            },
            'M90x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 42.9715,
                    'dSupport': 86.3235,
                    'sectionProfile': [
                        [0, -1.3135],
                        [0, 1.3135],
                        [1.911, 0.2102],
                        [1.911, -0.2102]
                    ]
                },
                'sortSize': 90.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -45.3565,
                    'dSupport': 90.3565,
                    'sectionProfile': [
                        [0, 1.478],
                        [0, -1.478],
                        [1.8555, -0.4068],
                        [1.8555, 0.4068]
                    ]
                }
            },
            'M90x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 43.6255,
                    'dSupport': 87.524,
                    'sectionProfile': [
                        [0, -0.8808],
                        [0, 0.8808],
                        [1.2845, 0.1392],
                        [1.2845, -0.1392]
                    ]
                },
                'sortSize': 90.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -45.2582,
                    'dSupport': 90.2625,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.247, -0.2701],
                        [1.247, 0.2701]
                    ]
                }
            },
            'M90x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 43.955,
                    'dSupport': 88.127,
                    'sectionProfile': [
                        [0, -0.6637],
                        [0, 0.6637],
                        [0.97, 0.1036],
                        [0.97, -0.1036]
                    ]
                },
                'sortSize': 90.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -45.2025,
                    'dSupport': 90.2145,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9395, -0.2001],
                        [0.9395, 0.2001]
                    ]
                }
            },
            'M95x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 44.814,
                    'dSupport': 90.119,
                    'sectionProfile': [
                        [0, -1.7468],
                        [0, 1.7468],
                        [2.5385, 0.2812],
                        [2.5385, -0.2812]
                    ]
                },
                'sortSize': 95.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -47.956,
                    'dSupport': 95.456,
                    'sectionProfile': [
                        [0, 1.9649],
                        [0, -1.9649],
                        [2.471, -0.5383],
                        [2.471, 0.5383]
                    ]
                }
            },
            'M95x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 45.4655,
                    'dSupport': 91.3175,
                    'sectionProfile': [
                        [0, -1.3155],
                        [0, 1.3155],
                        [1.917, 0.2087],
                        [1.917, -0.2087]
                    ]
                },
                'sortSize': 95.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -47.8665,
                    'dSupport': 95.3665,
                    'sectionProfile': [
                        [0, 1.4809],
                        [0, -1.4809],
                        [1.8655, -0.4039],
                        [1.8655, 0.4039]
                    ]
                }
            },
            'M95x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 46.1205,
                    'dSupport': 92.519,
                    'sectionProfile': [
                        [0, -0.8822],
                        [0, 0.8822],
                        [1.2895, 0.1377],
                        [1.2895, -0.1377]
                    ]
                },
                'sortSize': 95.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -47.7617,
                    'dSupport': 95.2695,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2505, -0.268],
                        [1.2505, 0.268]
                    ]
                }
            },
            'M95x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 46.445,
                    'dSupport': 93.117,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 95.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -47.7085,
                    'dSupport': 95.2265,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9455, -0.1966],
                        [0.9455, 0.1966]
                    ]
                }
            },
            'M100x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 47.314,
                    'dSupport': 95.119,
                    'sectionProfile': [
                        [0, -1.7468],
                        [0, 1.7468],
                        [2.5385, 0.2812],
                        [2.5385, -0.2812]
                    ]
                },
                'sortSize': 100.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -50.455,
                    'dSupport': 100.455,
                    'sectionProfile': [
                        [0, 1.9643],
                        [0, -1.9643],
                        [2.47, -0.5383],
                        [2.47, 0.5383]
                    ]
                }
            },
            'M100x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 47.9655,
                    'dSupport': 96.3175,
                    'sectionProfile': [
                        [0, -1.3155],
                        [0, 1.3155],
                        [1.917, 0.2087],
                        [1.917, -0.2087]
                    ]
                },
                'sortSize': 100.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -50.365,
                    'dSupport': 100.365,
                    'sectionProfile': [
                        [0, 1.4801],
                        [0, -1.4801],
                        [1.864, -0.4039],
                        [1.864, 0.4039]
                    ]
                }
            },
            'M100x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 48.6205,
                    'dSupport': 97.519,
                    'sectionProfile': [
                        [0, -0.8822],
                        [0, 0.8822],
                        [1.2895, 0.1377],
                        [1.2895, -0.1377]
                    ]
                },
                'sortSize': 100.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -50.2617,
                    'dSupport': 100.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2505, -0.268],
                        [1.2505, 0.268]
                    ]
                }
            },
            'M100x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 48.945,
                    'dSupport': 98.117,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 100.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -50.2085,
                    'dSupport': 100.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.9455, -0.1966],
                        [0.9455, 0.1966]
                    ]
                }
            },
            'M105x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 49.814,
                    'dSupport': 100.119,
                    'sectionProfile': [
                        [0, -1.7425],
                        [0, 1.7425],
                        [2.536, 0.2783],
                        [2.536, -0.2783]
                    ]
                },
                'sortSize': 105.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -52.955,
                    'dSupport': 105.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M105x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 50.465,
                    'dSupport': 101.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 105.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -52.865,
                    'dSupport': 105.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M105x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 51.12,
                    'dSupport': 102.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 105.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -52.7612,
                    'dSupport': 105.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M105x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 51.445,
                    'dSupport': 103.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 105.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -52.709,
                    'dSupport': 105.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M110x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 52.315,
                    'dSupport': 105.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 110.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -55.455,
                    'dSupport': 110.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M110x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 52.965,
                    'dSupport': 106.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 110.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -55.365,
                    'dSupport': 110.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M110x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 53.62,
                    'dSupport': 107.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 110.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -55.2612,
                    'dSupport': 110.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M110x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 53.945,
                    'dSupport': 108.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 110.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -55.209,
                    'dSupport': 110.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M115x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 54.815,
                    'dSupport': 110.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 115.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -57.955,
                    'dSupport': 115.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M115x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 55.465,
                    'dSupport': 111.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 115.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -57.865,
                    'dSupport': 115.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M115x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 56.12,
                    'dSupport': 112.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 115.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -57.7612,
                    'dSupport': 115.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M115x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 56.445,
                    'dSupport': 113.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 115.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -57.709,
                    'dSupport': 115.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M120x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 57.315,
                    'dSupport': 115.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 120.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -60.455,
                    'dSupport': 120.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M120x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 57.965,
                    'dSupport': 116.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 120.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -60.365,
                    'dSupport': 120.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M120x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 58.62,
                    'dSupport': 117.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 120.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -60.2612,
                    'dSupport': 120.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M120x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 58.945,
                    'dSupport': 118.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 120.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -60.209,
                    'dSupport': 120.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M125x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 58.515,
                    'dSupport': 117.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 125.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -63.135,
                    'dSupport': 125.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M125x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 59.815,
                    'dSupport': 120.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 125.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -62.955,
                    'dSupport': 125.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M125x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 60.465,
                    'dSupport': 121.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 125.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -62.865,
                    'dSupport': 125.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M125x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 61.12,
                    'dSupport': 122.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 125.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -62.7612,
                    'dSupport': 125.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M125x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 61.445,
                    'dSupport': 123.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 125.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -62.709,
                    'dSupport': 125.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M130x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 61.015,
                    'dSupport': 122.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 130.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -65.635,
                    'dSupport': 130.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M130x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 62.315,
                    'dSupport': 125.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 130.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -65.455,
                    'dSupport': 130.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M130x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 62.965,
                    'dSupport': 126.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 130.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -65.365,
                    'dSupport': 130.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M130x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 63.62,
                    'dSupport': 127.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 130.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -65.2612,
                    'dSupport': 130.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M130x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 63.945,
                    'dSupport': 128.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 130.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -65.209,
                    'dSupport': 130.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M135x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 64.815,
                    'dSupport': 130.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 135.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -67.955,
                    'dSupport': 135.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M135x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 65.465,
                    'dSupport': 131.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 135.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -67.865,
                    'dSupport': 135.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M135x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 66.12,
                    'dSupport': 132.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 135.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -67.7612,
                    'dSupport': 135.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M135x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 66.445,
                    'dSupport': 133.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 135.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -67.709,
                    'dSupport': 135.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M140x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 66.015,
                    'dSupport': 132.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 140.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -70.635,
                    'dSupport': 140.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M140x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 67.315,
                    'dSupport': 135.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 140.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -70.455,
                    'dSupport': 140.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M140x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 67.965,
                    'dSupport': 136.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 140.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -70.365,
                    'dSupport': 140.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M140x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 68.62,
                    'dSupport': 137.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 140.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -70.2612,
                    'dSupport': 140.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M140x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 68.945,
                    'dSupport': 138.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 140.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -70.209,
                    'dSupport': 140.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M145x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 69.815,
                    'dSupport': 140.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 145.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -72.955,
                    'dSupport': 145.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M145x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 70.465,
                    'dSupport': 141.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 145.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -72.865,
                    'dSupport': 145.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M145x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 71.12,
                    'dSupport': 142.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 145.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -72.7612,
                    'dSupport': 145.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M145x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 71.445,
                    'dSupport': 143.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 145.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -72.709,
                    'dSupport': 145.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M150x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 71.015,
                    'dSupport': 142.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 150.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -75.635,
                    'dSupport': 150.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M150x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 72.315,
                    'dSupport': 145.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 150.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -75.455,
                    'dSupport': 150.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M150x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 72.965,
                    'dSupport': 146.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 150.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -75.365,
                    'dSupport': 150.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M150x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 73.62,
                    'dSupport': 147.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 150.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -75.2612,
                    'dSupport': 150.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M150x1.5': {
                'ext': {
                    'pitch': 1.5,
                    'rRotation': 73.945,
                    'dSupport': 148.115,
                    'sectionProfile': [
                        [0, -0.6666],
                        [0, 0.6666],
                        [0.98, 0.1008],
                        [0.98, -0.1008]
                    ]
                },
                'sortSize': 150.0,
                'int': {
                    'pitch': 1.5,
                    'rRotation': -75.209,
                    'dSupport': 150.225,
                    'sectionProfile': [
                        [0, 0.7425],
                        [0, -0.7425],
                        [0.944, -0.1975],
                        [0.944, 0.1975]
                    ]
                }
            },
            'M155x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 74.815,
                    'dSupport': 150.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 155.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -77.955,
                    'dSupport': 155.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M155x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 75.465,
                    'dSupport': 151.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 155.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -77.865,
                    'dSupport': 155.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M155x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 76.12,
                    'dSupport': 152.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 155.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -77.7612,
                    'dSupport': 155.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M160x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 76.015,
                    'dSupport': 152.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 160.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -80.635,
                    'dSupport': 160.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M160x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 77.315,
                    'dSupport': 155.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 160.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -80.455,
                    'dSupport': 160.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M160x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 77.965,
                    'dSupport': 156.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 160.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -80.365,
                    'dSupport': 160.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M160x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 78.62,
                    'dSupport': 157.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 160.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -80.2612,
                    'dSupport': 160.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M165x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 79.815,
                    'dSupport': 160.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 165.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -82.955,
                    'dSupport': 165.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M165x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 80.465,
                    'dSupport': 161.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 165.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -82.865,
                    'dSupport': 165.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M165x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 81.12,
                    'dSupport': 162.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 165.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -82.7612,
                    'dSupport': 165.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M170x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 81.015,
                    'dSupport': 162.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 170.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -85.635,
                    'dSupport': 170.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M170x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 82.315,
                    'dSupport': 165.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 170.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -85.455,
                    'dSupport': 170.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M170x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 82.965,
                    'dSupport': 166.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 170.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -85.365,
                    'dSupport': 170.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M170x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 83.62,
                    'dSupport': 167.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 170.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -85.2612,
                    'dSupport': 170.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M175x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 84.815,
                    'dSupport': 170.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 175.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -87.955,
                    'dSupport': 175.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M175x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 85.465,
                    'dSupport': 171.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 175.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -87.865,
                    'dSupport': 175.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M175x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 86.12,
                    'dSupport': 172.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 175.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -87.7612,
                    'dSupport': 175.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M180x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 86.015,
                    'dSupport': 172.73,
                    'sectionProfile': [
                        [0, -2.6027],
                        [0, 2.6027],
                        [3.785, 0.4175],
                        [3.785, -0.4175]
                    ]
                },
                'sortSize': 180.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -90.635,
                    'dSupport': 180.635,
                    'sectionProfile': [
                        [0, 2.9347],
                        [0, -2.9347],
                        [3.68, -0.8101],
                        [3.68, 0.8101]
                    ]
                }
            },
            'M180x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 87.315,
                    'dSupport': 175.12,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.535, 0.2783],
                        [2.535, -0.2783]
                    ]
                },
                'sortSize': 180.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -90.455,
                    'dSupport': 180.455,
                    'sectionProfile': [
                        [0, 1.9642],
                        [0, -1.9642],
                        [2.47, -0.5381],
                        [2.47, 0.5381]
                    ]
                }
            },
            'M180x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 87.965,
                    'dSupport': 176.315,
                    'sectionProfile': [
                        [0, -1.3187],
                        [0, 1.3187],
                        [1.935, 0.2015],
                        [1.935, -0.2015]
                    ]
                },
                'sortSize': 180.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -90.365,
                    'dSupport': 180.365,
                    'sectionProfile': [
                        [0, 1.4803],
                        [0, -1.4803],
                        [1.865, -0.4036],
                        [1.865, 0.4036]
                    ]
                }
            },
            'M180x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 88.62,
                    'dSupport': 177.52,
                    'sectionProfile': [
                        [0, -0.8926],
                        [0, 0.8926],
                        [1.305, 0.1392],
                        [1.305, -0.1392]
                    ]
                },
                'sortSize': 180.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -90.2612,
                    'dSupport': 180.27,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2487, -0.2691],
                        [1.2487, 0.2691]
                    ]
                }
            },
            'M185x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 89.8,
                    'dSupport': 180.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 185.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -92.975,
                    'dSupport': 185.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M185x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 90.455,
                    'dSupport': 181.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 185.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -92.8831,
                    'dSupport': 185.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M185x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 91.11,
                    'dSupport': 182.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 185.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -92.7687,
                    'dSupport': 185.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M190x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 91.005,
                    'dSupport': 182.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 190.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -95.645,
                    'dSupport': 190.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M190x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 92.3,
                    'dSupport': 185.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 190.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -95.475,
                    'dSupport': 190.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M190x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 92.955,
                    'dSupport': 186.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 190.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -95.3831,
                    'dSupport': 190.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M190x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 93.61,
                    'dSupport': 187.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 190.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -95.2687,
                    'dSupport': 190.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M195x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 94.8,
                    'dSupport': 190.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 195.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -97.975,
                    'dSupport': 195.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M195x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 95.455,
                    'dSupport': 191.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 195.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -97.8831,
                    'dSupport': 195.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M195x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 96.11,
                    'dSupport': 192.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 195.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -97.7687,
                    'dSupport': 195.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M200x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 96.005,
                    'dSupport': 192.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 200.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -100.645,
                    'dSupport': 200.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M200x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 97.3,
                    'dSupport': 195.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 200.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -100.475,
                    'dSupport': 200.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M200x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 97.955,
                    'dSupport': 196.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 200.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -100.3831,
                    'dSupport': 200.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M200x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 98.61,
                    'dSupport': 197.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 200.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -100.2687,
                    'dSupport': 200.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M205x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 99.8,
                    'dSupport': 200.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 205.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -102.975,
                    'dSupport': 205.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M205x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 100.455,
                    'dSupport': 201.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 205.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -102.8831,
                    'dSupport': 205.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M205x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 101.11,
                    'dSupport': 202.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 205.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -102.7687,
                    'dSupport': 205.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M210x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 101.005,
                    'dSupport': 202.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 210.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -105.645,
                    'dSupport': 210.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M210x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 102.3,
                    'dSupport': 205.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 210.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -105.475,
                    'dSupport': 210.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M210x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 102.955,
                    'dSupport': 206.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 210.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -105.3831,
                    'dSupport': 210.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M210x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 103.61,
                    'dSupport': 207.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 210.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -105.2687,
                    'dSupport': 210.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M215x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 104.8,
                    'dSupport': 210.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 215.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -107.975,
                    'dSupport': 215.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M215x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 105.455,
                    'dSupport': 211.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 215.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -107.8831,
                    'dSupport': 215.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M220x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 106.005,
                    'dSupport': 212.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 220.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -110.645,
                    'dSupport': 220.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M220x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 107.3,
                    'dSupport': 215.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 220.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -110.475,
                    'dSupport': 220.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M220x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 107.955,
                    'dSupport': 216.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 220.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -110.3831,
                    'dSupport': 220.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M220x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 108.61,
                    'dSupport': 217.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 220.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -110.2687,
                    'dSupport': 220.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M225x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 109.8,
                    'dSupport': 220.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 225.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -112.975,
                    'dSupport': 225.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M225x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 110.455,
                    'dSupport': 221.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 225.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -112.8831,
                    'dSupport': 225.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M225x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 111.11,
                    'dSupport': 222.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 225.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -112.7687,
                    'dSupport': 225.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M230x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 112.3,
                    'dSupport': 225.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 230.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -115.475,
                    'dSupport': 230.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M230x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 112.955,
                    'dSupport': 226.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 230.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -115.3831,
                    'dSupport': 230.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M230x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 113.61,
                    'dSupport': 227.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 230.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -115.2687,
                    'dSupport': 230.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M235x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 114.8,
                    'dSupport': 230.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 235.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -117.975,
                    'dSupport': 235.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M235x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 115.455,
                    'dSupport': 231.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 235.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -117.8831,
                    'dSupport': 235.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M240x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 116.005,
                    'dSupport': 232.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 240.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -120.645,
                    'dSupport': 240.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M240x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 117.3,
                    'dSupport': 235.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 240.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -120.475,
                    'dSupport': 240.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M240x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 117.955,
                    'dSupport': 236.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 240.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -120.3831,
                    'dSupport': 240.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M240x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 118.61,
                    'dSupport': 237.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 240.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -120.2687,
                    'dSupport': 240.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M245x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 119.8,
                    'dSupport': 240.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 245.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -122.975,
                    'dSupport': 245.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M245x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 120.455,
                    'dSupport': 241.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 245.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -122.8831,
                    'dSupport': 245.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M245x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 121.11,
                    'dSupport': 242.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 245.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -122.7687,
                    'dSupport': 245.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M250x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 121.005,
                    'dSupport': 242.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 250.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -125.645,
                    'dSupport': 250.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M250x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 122.3,
                    'dSupport': 245.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 250.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -125.475,
                    'dSupport': 250.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M250x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 122.955,
                    'dSupport': 246.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 250.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -125.3831,
                    'dSupport': 250.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M250x2': {
                'ext': {
                    'pitch': 2,
                    'rRotation': 123.61,
                    'dSupport': 247.51,
                    'sectionProfile': [
                        [0, -0.8984],
                        [0, 0.8984],
                        [1.315, 0.1392],
                        [1.315, -0.1392]
                    ]
                },
                'sortSize': 250.0,
                'int': {
                    'pitch': 2,
                    'rRotation': -125.2687,
                    'dSupport': 250.285,
                    'sectionProfile': [
                        [0, 0.99],
                        [0, -0.99],
                        [1.2562, -0.2647],
                        [1.2562, 0.2647]
                    ]
                }
            },
            'M255x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 124.8,
                    'dSupport': 250.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 255.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -127.975,
                    'dSupport': 255.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M255x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 125.455,
                    'dSupport': 251.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 255.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -127.8831,
                    'dSupport': 255.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M260x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 126.005,
                    'dSupport': 252.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 260.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -130.645,
                    'dSupport': 260.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M260x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 127.3,
                    'dSupport': 255.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 260.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -130.475,
                    'dSupport': 260.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M260x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 127.955,
                    'dSupport': 256.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 260.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -130.3831,
                    'dSupport': 260.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M265x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 129.8,
                    'dSupport': 260.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 265.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -132.975,
                    'dSupport': 265.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M265x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 130.455,
                    'dSupport': 261.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 265.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -132.8831,
                    'dSupport': 265.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M270x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 132.3,
                    'dSupport': 265.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 270.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -135.475,
                    'dSupport': 270.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M270x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 132.955,
                    'dSupport': 266.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 270.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -135.3831,
                    'dSupport': 270.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M275x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 134.8,
                    'dSupport': 270.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 275.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -137.975,
                    'dSupport': 275.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M275x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 135.455,
                    'dSupport': 271.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 275.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -137.8831,
                    'dSupport': 275.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M280x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 136.005,
                    'dSupport': 272.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 280.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -140.645,
                    'dSupport': 280.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M280x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 137.3,
                    'dSupport': 275.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 280.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -140.475,
                    'dSupport': 280.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M280x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 137.955,
                    'dSupport': 276.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 280.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -140.3831,
                    'dSupport': 280.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M285x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 139.8,
                    'dSupport': 280.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 285.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -142.975,
                    'dSupport': 285.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M285x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 140.455,
                    'dSupport': 281.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 285.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -142.8831,
                    'dSupport': 285.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M290x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 142.3,
                    'dSupport': 285.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 290.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -145.475,
                    'dSupport': 290.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M290x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 142.955,
                    'dSupport': 286.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 290.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -145.3831,
                    'dSupport': 290.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M295x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 144.8,
                    'dSupport': 290.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 295.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -147.975,
                    'dSupport': 295.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M295x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 145.455,
                    'dSupport': 291.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 295.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -147.8831,
                    'dSupport': 295.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M300x6': {
                'ext': {
                    'pitch': 6,
                    'rRotation': 146.005,
                    'dSupport': 292.72,
                    'sectionProfile': [
                        [0, -2.6085],
                        [0, 2.6085],
                        [3.795, 0.4175],
                        [3.795, -0.4175]
                    ]
                },
                'sortSize': 300.0,
                'int': {
                    'pitch': 6,
                    'rRotation': -150.645,
                    'dSupport': 300.645,
                    'sectionProfile': [
                        [0, 2.9362],
                        [0, -2.9362],
                        [3.69, -0.8057],
                        [3.69, 0.8057]
                    ]
                }
            },
            'M300x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 147.3,
                    'dSupport': 295.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 300.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -150.475,
                    'dSupport': 300.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M300x3': {
                'ext': {
                    'pitch': 3,
                    'rRotation': 147.955,
                    'dSupport': 296.305,
                    'sectionProfile': [
                        [0, -1.3245],
                        [0, 1.3245],
                        [1.945, 0.2015],
                        [1.945, -0.2015]
                    ]
                },
                'sortSize': 300.0,
                'int': {
                    'pitch': 3,
                    'rRotation': -150.3831,
                    'dSupport': 300.385,
                    'sectionProfile': [
                        [0, 1.485],
                        [0, -1.485],
                        [1.8831, -0.3978],
                        [1.8831, 0.3978]
                    ]
                }
            },
            'M310x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 152.3,
                    'dSupport': 305.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 310.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -155.475,
                    'dSupport': 310.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M320x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 157.3,
                    'dSupport': 315.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 320.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -160.475,
                    'dSupport': 320.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M330x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 162.3,
                    'dSupport': 325.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 330.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -165.475,
                    'dSupport': 330.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M340x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 167.3,
                    'dSupport': 335.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 340.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -170.475,
                    'dSupport': 340.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M350x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 172.3,
                    'dSupport': 345.105,
                    'sectionProfile': [
                        [0, -1.7506],
                        [0, 1.7506],
                        [2.55, 0.2783],
                        [2.55, -0.2783]
                    ]
                },
                'sortSize': 350.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -175.475,
                    'dSupport': 350.475,
                    'sectionProfile': [
                        [0, 1.9699],
                        [0, -1.9699],
                        [2.49, -0.5323],
                        [2.49, 0.5323]
                    ]
                }
            },
            'M360x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 177.29,
                    'dSupport': 355.095,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.56, 0.2639],
                        [2.56, -0.2639]
                    ]
                },
                'sortSize': 360.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -180.49,
                    'dSupport': 360.49,
                    'sectionProfile': [
                        [0, 1.9757],
                        [0, -1.9757],
                        [2.505, -0.5295],
                        [2.505, 0.5295]
                    ]
                }
            },
            'M370x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 182.29,
                    'dSupport': 365.095,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.56, 0.2639],
                        [2.56, -0.2639]
                    ]
                },
                'sortSize': 370.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -185.49,
                    'dSupport': 370.49,
                    'sectionProfile': [
                        [0, 1.9757],
                        [0, -1.9757],
                        [2.505, -0.5295],
                        [2.505, 0.5295]
                    ]
                }
            },
            'M380x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 187.29,
                    'dSupport': 375.095,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.56, 0.2639],
                        [2.56, -0.2639]
                    ]
                },
                'sortSize': 380.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -190.49,
                    'dSupport': 380.49,
                    'sectionProfile': [
                        [0, 1.9757],
                        [0, -1.9757],
                        [2.505, -0.5295],
                        [2.505, 0.5295]
                    ]
                }
            },
            'M390x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 192.29,
                    'dSupport': 385.095,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.56, 0.2639],
                        [2.56, -0.2639]
                    ]
                },
                'sortSize': 390.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -195.49,
                    'dSupport': 390.49,
                    'sectionProfile': [
                        [0, 1.9757],
                        [0, -1.9757],
                        [2.505, -0.5295],
                        [2.505, 0.5295]
                    ]
                }
            },
            'M400x4': {
                'ext': {
                    'pitch': 4,
                    'rRotation': 197.29,
                    'dSupport': 395.095,
                    'sectionProfile': [
                        [0, -1.7419],
                        [0, 1.7419],
                        [2.56, 0.2639],
                        [2.56, -0.2639]
                    ]
                },
                'sortSize': 400.0,
                'int': {
                    'pitch': 4,
                    'rRotation': -200.49,
                    'dSupport': 400.49,
                    'sectionProfile': [
                        [0, 1.9757],
                        [0, -1.9757],
                        [2.505, -0.5295],
                        [2.505, 0.5295]
                    ]
                }
            }
        }
    },
    'unified': {
        'coarse': {
            'UNC 1/4': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 2.4471,
                    'dSupport': 4.9052,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.25,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -3.2079,
                    'dSupport': 6.4048,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNC 5/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 3.1617,
                    'dSupport': 6.3355,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 0.3125,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -4.0039,
                    'dSupport': 7.9957,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNC 3/8': {
                'ext': {
                    'pitch': 1.5875,
                    'rRotation': 3.8568,
                    'dSupport': 7.7274,
                    'sectionProfile': [
                        [0, -0.5953],
                        [0, 0.5953],
                        [0.8593, 0.0992],
                        [0.8593, -0.0992]
                    ]
                },
                'sortSize': 0.375,
                'int': {
                    'pitch': 1.5875,
                    'rRotation': -4.8002,
                    'dSupport': 9.5867,
                    'sectionProfile': [
                        [0, 0.6945],
                        [0, -0.6945],
                        [0.8593, -0.1984],
                        [0.8593, 0.1984]
                    ]
                }
            },
            'UNC 7/16': {
                'ext': {
                    'pitch': 1.81429,
                    'rRotation': 4.5242,
                    'dSupport': 9.0641,
                    'sectionProfile': [
                        [0, -0.6804],
                        [0, 0.6804],
                        [0.982, 0.1134],
                        [0.982, -0.1134]
                    ]
                },
                'sortSize': 0.4375,
                'int': {
                    'pitch': 1.81429,
                    'rRotation': -5.5969,
                    'dSupport': 11.1781,
                    'sectionProfile': [
                        [0, 0.7937],
                        [0, -0.7937],
                        [0.982, -0.2268],
                        [0.982, 0.2268]
                    ]
                }
            },
            'UNC 1/2': {
                'ext': {
                    'pitch': 1.95385,
                    'rRotation': 5.2401,
                    'dSupport': 10.4971,
                    'sectionProfile': [
                        [0, -0.7327],
                        [0, 0.7327],
                        [1.0576, 0.1221],
                        [1.0576, -0.1221]
                    ]
                },
                'sortSize': 0.5,
                'int': {
                    'pitch': 1.95385,
                    'rRotation': -6.3925,
                    'dSupport': 12.7681,
                    'sectionProfile': [
                        [0, 0.8548],
                        [0, -0.8548],
                        [1.0576, -0.2442],
                        [1.0576, 0.2442]
                    ]
                }
            },
            'UNC 9/16': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 5.9432,
                    'dSupport': 11.9048,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 0.5625,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -7.1883,
                    'dSupport': 14.3583,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            'UNC 5/8': {
                'ext': {
                    'pitch': 2.30909,
                    'rRotation': 6.63,
                    'dSupport': 13.2801,
                    'sectionProfile': [
                        [0, -0.8659],
                        [0, 0.8659],
                        [1.2498, 0.1443],
                        [1.2498, -0.1443]
                    ]
                },
                'sortSize': 0.625,
                'int': {
                    'pitch': 2.30909,
                    'rRotation': -7.9843,
                    'dSupport': 15.9486,
                    'sectionProfile': [
                        [0, 1.0102],
                        [0, -1.0102],
                        [1.2498, -0.2886],
                        [1.2498, 0.2886]
                    ]
                }
            },
            'UNC 3/4': {
                'ext': {
                    'pitch': 2.54,
                    'rRotation': 8.089,
                    'dSupport': 16.2001,
                    'sectionProfile': [
                        [0, -0.9525],
                        [0, 0.9525],
                        [1.3748, 0.1588],
                        [1.3748, -0.1588]
                    ]
                },
                'sortSize': 0.75,
                'int': {
                    'pitch': 2.54,
                    'rRotation': -9.5747,
                    'dSupport': 19.1274,
                    'sectionProfile': [
                        [0, 1.1113],
                        [0, -1.1113],
                        [1.3748, -0.3175],
                        [1.3748, 0.3175]
                    ]
                }
            },
            'UNC 7/8': {
                'ext': {
                    'pitch': 2.82222,
                    'rRotation': 9.5199,
                    'dSupport': 19.0642,
                    'sectionProfile': [
                        [0, -1.0583],
                        [0, 1.0583],
                        [1.5276, 0.1764],
                        [1.5276, -0.1764]
                    ]
                },
                'sortSize': 0.875,
                'int': {
                    'pitch': 2.82222,
                    'rRotation': -11.1653,
                    'dSupport': 22.3062,
                    'sectionProfile': [
                        [0, 1.2347],
                        [0, -1.2347],
                        [1.5276, -0.3528],
                        [1.5276, 0.3528]
                    ]
                }
            },
            'UNC #1': {
                'ext': {
                    'pitch': 0.396875,
                    'rRotation': 0.6907,
                    'dSupport': 1.3848,
                    'sectionProfile': [
                        [0, -0.1488],
                        [0, 0.1488],
                        [0.2148, 0.0248],
                        [0.2148, -0.0248]
                    ]
                },
                'sortSize': 1,
                'int': {
                    'pitch': 0.396875,
                    'rRotation': -0.9447,
                    'dSupport': 1.8859,
                    'sectionProfile': [
                        [0, 0.1736],
                        [0, -0.1736],
                        [0.2148, -0.0496],
                        [0.2148, 0.0496]
                    ]
                }
            },
            'UNC 1': {
                'ext': {
                    'pitch': 3.175,
                    'rRotation': 10.912,
                    'dSupport': 21.8514,
                    'sectionProfile': [
                        [0, -1.1906],
                        [0, 1.1906],
                        [1.7185, 0.1984],
                        [1.7185, -0.1984]
                    ]
                },
                'sortSize': 1,
                'int': {
                    'pitch': 3.175,
                    'rRotation': -12.7565,
                    'dSupport': 25.4854,
                    'sectionProfile': [
                        [0, 1.3891],
                        [0, -1.3891],
                        [1.7185, -0.3969],
                        [1.7185, 0.3969]
                    ]
                }
            },
            'UNC 1 1/8': {
                'ext': {
                    'pitch': 3.62857,
                    'rRotation': 12.2487,
                    'dSupport': 24.5288,
                    'sectionProfile': [
                        [0, -1.3607],
                        [0, 1.3607],
                        [1.964, 0.2268],
                        [1.964, -0.2268]
                    ]
                },
                'sortSize': 1.125,
                'int': {
                    'pitch': 3.62857,
                    'rRotation': -14.3483,
                    'dSupport': 28.6651,
                    'sectionProfile': [
                        [0, 1.5875],
                        [0, -1.5875],
                        [1.964, -0.4536],
                        [1.964, 0.4536]
                    ]
                }
            },
            'UNC 1 1/4': {
                'ext': {
                    'pitch': 3.62857,
                    'rRotation': 13.8356,
                    'dSupport': 27.7027,
                    'sectionProfile': [
                        [0, -1.3607],
                        [0, 1.3607],
                        [1.964, 0.2268],
                        [1.964, -0.2268]
                    ]
                },
                'sortSize': 1.25,
                'int': {
                    'pitch': 3.62857,
                    'rRotation': -15.9362,
                    'dSupport': 31.841,
                    'sectionProfile': [
                        [0, 1.5875],
                        [0, -1.5875],
                        [1.964, -0.4536],
                        [1.964, 0.4536]
                    ]
                }
            },
            'UNC 1 3/8': {
                'ext': {
                    'pitch': 4.23333,
                    'rRotation': 15.0894,
                    'dSupport': 30.2154,
                    'sectionProfile': [
                        [0, -1.5875],
                        [0, 1.5875],
                        [2.2914, 0.2646],
                        [2.2914, -0.2646]
                    ]
                },
                'sortSize': 1.375,
                'int': {
                    'pitch': 4.23333,
                    'rRotation': -17.5289,
                    'dSupport': 35.0212,
                    'sectionProfile': [
                        [0, 1.8521],
                        [0, -1.8521],
                        [2.2914, -0.5292],
                        [2.2914, 0.5292]
                    ]
                }
            },
            'UNC 1 1/2': {
                'ext': {
                    'pitch': 4.23333,
                    'rRotation': 16.6764,
                    'dSupport': 33.3894,
                    'sectionProfile': [
                        [0, -1.5875],
                        [0, 1.5875],
                        [2.2914, 0.2646],
                        [2.2914, -0.2646]
                    ]
                },
                'sortSize': 1.5,
                'int': {
                    'pitch': 4.23333,
                    'rRotation': -19.1168,
                    'dSupport': 38.197,
                    'sectionProfile': [
                        [0, 1.8521],
                        [0, -1.8521],
                        [2.2914, -0.5292],
                        [2.2914, 0.5292]
                    ]
                }
            },
            'UNC 1 3/4': {
                'ext': {
                    'pitch': 5.08,
                    'rRotation': 19.3844,
                    'dSupport': 38.8129,
                    'sectionProfile': [
                        [0, -1.905],
                        [0, 1.905],
                        [2.7496, 0.3175],
                        [2.7496, -0.3175]
                    ]
                },
                'sortSize': 1.75,
                'int': {
                    'pitch': 5.08,
                    'rRotation': -22.2989,
                    'dSupport': 44.5538,
                    'sectionProfile': [
                        [0, 2.2225],
                        [0, -2.2225],
                        [2.7496, -0.635],
                        [2.7496, 0.635]
                    ]
                }
            },
            'UNC #2': {
                'ext': {
                    'pitch': 0.453571,
                    'rRotation': 0.8234,
                    'dSupport': 1.6508,
                    'sectionProfile': [
                        [0, -0.1701],
                        [0, 0.1701],
                        [0.2455, 0.0283],
                        [0.2455, -0.0283]
                    ]
                },
                'sortSize': 2,
                'int': {
                    'pitch': 0.453571,
                    'rRotation': -1.1111,
                    'dSupport': 2.2183,
                    'sectionProfile': [
                        [0, 0.1984],
                        [0, -0.1984],
                        [0.2455, -0.0567],
                        [0.2455, 0.0567]
                    ]
                }
            },
            'UNC 2': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 21.8604,
                    'dSupport': 43.7758,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 2,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -25.4833,
                    'dSupport': 50.9116,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC 2 1/4': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 25.0347,
                    'dSupport': 50.1243,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 2.25,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -28.6589,
                    'dSupport': 57.2629,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC 2 1/2': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 28.2089,
                    'dSupport': 56.4729,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 2.5,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -31.8345,
                    'dSupport': 63.614,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC 2 3/4': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 31.3833,
                    'dSupport': 62.8215,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 2.75,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -35.0101,
                    'dSupport': 69.9651,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC #3': {
                'ext': {
                    'pitch': 0.529167,
                    'rRotation': 0.9457,
                    'dSupport': 1.896,
                    'sectionProfile': [
                        [0, -0.1984],
                        [0, 0.1984],
                        [0.2864, 0.0331],
                        [0.2864, -0.0331]
                    ]
                },
                'sortSize': 3,
                'int': {
                    'pitch': 0.529167,
                    'rRotation': -1.2778,
                    'dSupport': 2.5509,
                    'sectionProfile': [
                        [0, 0.2315],
                        [0, -0.2315],
                        [0.2864, -0.0661],
                        [0.2864, 0.0661]
                    ]
                }
            },
            'UNC 3': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 34.5576,
                    'dSupport': 69.1703,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 3,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -38.1856,
                    'dSupport': 76.3162,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC 3 1/4': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 37.732,
                    'dSupport': 75.5191,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 3.25,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -41.3611,
                    'dSupport': 82.6671,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC 3 1/2': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 40.9065,
                    'dSupport': 81.868,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 3.5,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -44.5365,
                    'dSupport': 89.018,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC 3 3/4': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 44.0809,
                    'dSupport': 88.2169,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 3.75,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -47.712,
                    'dSupport': 95.3689,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC #4': {
                'ext': {
                    'pitch': 0.635,
                    'rRotation': 1.0511,
                    'dSupport': 2.1077,
                    'sectionProfile': [
                        [0, -0.2381],
                        [0, 0.2381],
                        [0.3437, 0.0397],
                        [0.3437, -0.0397]
                    ]
                },
                'sortSize': 4,
                'int': {
                    'pitch': 0.635,
                    'rRotation': -1.4448,
                    'dSupport': 2.8842,
                    'sectionProfile': [
                        [0, 0.2778],
                        [0, -0.2778],
                        [0.3437, -0.0794],
                        [0.3437, 0.0794]
                    ]
                }
            },
            'UNC 4': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 47.2554,
                    'dSupport': 94.5659,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 4,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -50.8874,
                    'dSupport': 101.7197,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            'UNC #5': {
                'ext': {
                    'pitch': 0.635,
                    'rRotation': 1.2159,
                    'dSupport': 2.4373,
                    'sectionProfile': [
                        [0, -0.2381],
                        [0, 0.2381],
                        [0.3437, 0.0397],
                        [0.3437, -0.0397]
                    ]
                },
                'sortSize': 5,
                'int': {
                    'pitch': 0.635,
                    'rRotation': -1.6102,
                    'dSupport': 3.2148,
                    'sectionProfile': [
                        [0, 0.2778],
                        [0, -0.2778],
                        [0.3437, -0.0794],
                        [0.3437, 0.0794]
                    ]
                }
            },
            'UNC #6': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 1.2919,
                    'dSupport': 2.5907,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -1.7779,
                    'dSupport': 3.5488,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            'UNC #8': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 1.6216,
                    'dSupport': 3.2501,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 8,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -2.1084,
                    'dSupport': 4.21,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            'UNC #10': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 1.8037,
                    'dSupport': 3.6167,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 10,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -2.4426,
                    'dSupport': 4.876,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            },
            'UNC #12': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 2.1336,
                    'dSupport': 4.2763,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 12,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -2.7731,
                    'dSupport': 5.537,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            }
        },
        'fine': {
            'UNF #0': {
                'ext': {
                    'pitch': 0.3175,
                    'rRotation': 0.5709,
                    'dSupport': 1.1445,
                    'sectionProfile': [
                        [0, -0.1191],
                        [0, 0.1191],
                        [0.1719, 0.0198],
                        [0.1719, -0.0198]
                    ]
                },
                'sortSize': 0,
                'int': {
                    'pitch': 0.3175,
                    'rRotation': -0.7777,
                    'dSupport': 1.5526,
                    'sectionProfile': [
                        [0, 0.1389],
                        [0, -0.1389],
                        [0.1719, -0.0397],
                        [0.1719, 0.0397]
                    ]
                }
            },
            'UNF 1/4': {
                'ext': {
                    'pitch': 0.907143,
                    'rRotation': 2.6492,
                    'dSupport': 5.3063,
                    'sectionProfile': [
                        [0, -0.3402],
                        [0, 0.3402],
                        [0.491, 0.0567],
                        [0.491, -0.0567]
                    ]
                },
                'sortSize': 0.25,
                'int': {
                    'pitch': 0.907143,
                    'rRotation': -3.2032,
                    'dSupport': 6.3986,
                    'sectionProfile': [
                        [0, 0.3969],
                        [0, -0.3969],
                        [0.491, -0.1134],
                        [0.491, 0.1134]
                    ]
                }
            },
            'UNF 5/16': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 3.3579,
                    'dSupport': 6.725,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 0.3125,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -3.9996,
                    'dSupport': 7.9901,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            },
            'UNF 3/8': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 4.151,
                    'dSupport': 8.3112,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 0.375,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -4.7939,
                    'dSupport': 9.5786,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            },
            'UNF 7/16': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 4.8264,
                    'dSupport': 9.6637,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.4375,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -5.5908,
                    'dSupport': 11.1705,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNF 1/2': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 5.6196,
                    'dSupport': 11.2502,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.5,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -6.3849,
                    'dSupport': 12.7589,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNF 9/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 6.3344,
                    'dSupport': 12.6811,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 0.5625,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -7.1808,
                    'dSupport': 14.3493,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNF 5/8': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 7.1277,
                    'dSupport': 14.2677,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 0.625,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -7.9749,
                    'dSupport': 15.9375,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNF 3/4': {
                'ext': {
                    'pitch': 1.5875,
                    'rRotation': 8.6165,
                    'dSupport': 17.2467,
                    'sectionProfile': [
                        [0, -0.5953],
                        [0, 0.5953],
                        [0.8593, 0.0992],
                        [0.8593, -0.0992]
                    ]
                },
                'sortSize': 0.75,
                'int': {
                    'pitch': 1.5875,
                    'rRotation': -9.565,
                    'dSupport': 19.1163,
                    'sectionProfile': [
                        [0, 0.6945],
                        [0, -0.6945],
                        [0.8593, -0.1984],
                        [0.8593, 0.1984]
                    ]
                }
            },
            'UNF 7/8': {
                'ext': {
                    'pitch': 1.81429,
                    'rRotation': 10.0775,
                    'dSupport': 20.1706,
                    'sectionProfile': [
                        [0, -0.6804],
                        [0, 0.6804],
                        [0.982, 0.1134],
                        [0.982, -0.1134]
                    ]
                },
                'sortSize': 0.875,
                'int': {
                    'pitch': 1.81429,
                    'rRotation': -11.1556,
                    'dSupport': 22.2955,
                    'sectionProfile': [
                        [0, 0.7937],
                        [0, -0.7937],
                        [0.982, -0.2268],
                        [0.982, 0.2268]
                    ]
                }
            },
            'UNF #1': {
                'ext': {
                    'pitch': 0.352778,
                    'rRotation': 0.7156,
                    'dSupport': 1.4342,
                    'sectionProfile': [
                        [0, -0.1323],
                        [0, 0.1323],
                        [0.1909, 0.022],
                        [0.1909, -0.022]
                    ]
                },
                'sortSize': 1,
                'int': {
                    'pitch': 0.352778,
                    'rRotation': -0.9438,
                    'dSupport': 1.8846,
                    'sectionProfile': [
                        [0, 0.1543],
                        [0, -0.1543],
                        [0.1909, -0.0441],
                        [0.1909, 0.0441]
                    ]
                }
            },
            'UNF 1': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 11.4968,
                    'dSupport': 23.0119,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 1,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -12.7467,
                    'dSupport': 25.4751,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            'UNF 1 1/8': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 13.0837,
                    'dSupport': 26.1857,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 1.125,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -14.3347,
                    'dSupport': 28.6511,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            'UNF 1 1/4': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 14.6706,
                    'dSupport': 29.3596,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 1.25,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -15.9227,
                    'dSupport': 31.827,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            'UNF 1 3/8': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 16.2576,
                    'dSupport': 32.5335,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 1.375,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -17.5106,
                    'dSupport': 35.0029,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            'UNF 1 1/2': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 17.8446,
                    'dSupport': 35.7075,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 1.5,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -19.0985,
                    'dSupport': 38.1787,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            'UNF #2': {
                'ext': {
                    'pitch': 0.396875,
                    'rRotation': 0.8554,
                    'dSupport': 1.7143,
                    'sectionProfile': [
                        [0, -0.1488],
                        [0, 0.1488],
                        [0.2148, 0.0248],
                        [0.2148, -0.0248]
                    ]
                },
                'sortSize': 2,
                'int': {
                    'pitch': 0.396875,
                    'rRotation': -1.11,
                    'dSupport': 2.2167,
                    'sectionProfile': [
                        [0, 0.1736],
                        [0, -0.1736],
                        [0.2148, -0.0496],
                        [0.2148, 0.0496]
                    ]
                }
            },
            'UNF #3': {
                'ext': {
                    'pitch': 0.453571,
                    'rRotation': 0.9882,
                    'dSupport': 1.9804,
                    'sectionProfile': [
                        [0, -0.1701],
                        [0, 0.1701],
                        [0.2455, 0.0283],
                        [0.2455, -0.0283]
                    ]
                },
                'sortSize': 3,
                'int': {
                    'pitch': 0.453571,
                    'rRotation': -1.2765,
                    'dSupport': 2.549,
                    'sectionProfile': [
                        [0, 0.1984],
                        [0, -0.1984],
                        [0.2455, -0.0567],
                        [0.2455, 0.0567]
                    ]
                }
            },
            'UNF #4': {
                'ext': {
                    'pitch': 0.529167,
                    'rRotation': 1.1105,
                    'dSupport': 2.2256,
                    'sectionProfile': [
                        [0, -0.1984],
                        [0, 0.1984],
                        [0.2864, 0.0331],
                        [0.2864, -0.0331]
                    ]
                },
                'sortSize': 4,
                'int': {
                    'pitch': 0.529167,
                    'rRotation': -1.4431,
                    'dSupport': 2.8816,
                    'sectionProfile': [
                        [0, 0.2315],
                        [0, -0.2315],
                        [0.2864, -0.0661],
                        [0.2864, 0.0661]
                    ]
                }
            },
            'UNF #5': {
                'ext': {
                    'pitch': 0.577273,
                    'rRotation': 1.2483,
                    'dSupport': 2.5016,
                    'sectionProfile': [
                        [0, -0.2165],
                        [0, 0.2165],
                        [0.3125, 0.0361],
                        [0.3125, -0.0361]
                    ]
                },
                'sortSize': 5,
                'int': {
                    'pitch': 0.577273,
                    'rRotation': -1.6092,
                    'dSupport': 3.2135,
                    'sectionProfile': [
                        [0, 0.2526],
                        [0, -0.2526],
                        [0.3125, -0.0722],
                        [0.3125, 0.0722]
                    ]
                }
            },
            'UNF #6': {
                'ext': {
                    'pitch': 0.635,
                    'rRotation': 1.3808,
                    'dSupport': 2.767,
                    'sectionProfile': [
                        [0, -0.2381],
                        [0, 0.2381],
                        [0.3437, 0.0397],
                        [0.3437, -0.0397]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 0.635,
                    'rRotation': -1.7755,
                    'dSupport': 3.5454,
                    'sectionProfile': [
                        [0, 0.2778],
                        [0, -0.2778],
                        [0.3437, -0.0794],
                        [0.3437, 0.0794]
                    ]
                }
            },
            'UNF #8': {
                'ext': {
                    'pitch': 0.705556,
                    'rRotation': 1.671,
                    'dSupport': 3.348,
                    'sectionProfile': [
                        [0, -0.2646],
                        [0, 0.2646],
                        [0.3819, 0.0441],
                        [0.3819, -0.0441]
                    ]
                },
                'sortSize': 8,
                'int': {
                    'pitch': 0.705556,
                    'rRotation': -2.1071,
                    'dSupport': 4.2081,
                    'sectionProfile': [
                        [0, 0.3087],
                        [0, -0.3087],
                        [0.3819, -0.0882],
                        [0.3819, 0.0882]
                    ]
                }
            },
            'UNF #10': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 1.9514,
                    'dSupport': 3.9097,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 10,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -2.439,
                    'dSupport': 4.8711,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            'UNF #12': {
                'ext': {
                    'pitch': 0.907143,
                    'rRotation': 2.2179,
                    'dSupport': 4.4436,
                    'sectionProfile': [
                        [0, -0.3402],
                        [0, 0.3402],
                        [0.491, 0.0567],
                        [0.491, -0.0567]
                    ]
                },
                'sortSize': 12,
                'int': {
                    'pitch': 0.907143,
                    'rRotation': -2.7711,
                    'dSupport': 5.5343,
                    'sectionProfile': [
                        [0, 0.3969],
                        [0, -0.3969],
                        [0.491, -0.1134],
                        [0.491, 0.1134]
                    ]
                }
            }
        },
        'extra fine': {
            'UNEF 1/4': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 2.7126,
                    'dSupport': 5.432,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 0.25,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -3.2017,
                    'dSupport': 6.3964,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            'UNEF 5/16': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 3.5056,
                    'dSupport': 7.018,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 0.3125,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -3.996,
                    'dSupport': 7.9851,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            'UNEF 3/8': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 4.2987,
                    'dSupport': 8.6042,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 0.375,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -4.7903,
                    'dSupport': 9.5737,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            'UNEF 7/16': {
                'ext': {
                    'pitch': 0.907143,
                    'rRotation': 5.0285,
                    'dSupport': 10.0649,
                    'sectionProfile': [
                        [0, -0.3402],
                        [0, 0.3402],
                        [0.491, 0.0567],
                        [0.491, -0.0567]
                    ]
                },
                'sortSize': 0.4375,
                'int': {
                    'pitch': 0.907143,
                    'rRotation': -5.5861,
                    'dSupport': 11.1643,
                    'sectionProfile': [
                        [0, 0.3969],
                        [0, -0.3969],
                        [0.491, -0.1134],
                        [0.491, 0.1134]
                    ]
                }
            },
            'UNEF 1/2': {
                'ext': {
                    'pitch': 0.907143,
                    'rRotation': 5.8217,
                    'dSupport': 11.6513,
                    'sectionProfile': [
                        [0, -0.3402],
                        [0, 0.3402],
                        [0.491, 0.0567],
                        [0.491, -0.0567]
                    ]
                },
                'sortSize': 0.5,
                'int': {
                    'pitch': 0.907143,
                    'rRotation': -6.3803,
                    'dSupport': 12.7527,
                    'sectionProfile': [
                        [0, 0.3969],
                        [0, -0.3969],
                        [0.491, -0.1134],
                        [0.491, 0.1134]
                    ]
                }
            },
            'UNEF 9/16': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 6.5307,
                    'dSupport': 13.0705,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 0.5625,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -7.1764,
                    'dSupport': 14.3437,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            },
            'UNEF 5/8': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 7.324,
                    'dSupport': 14.6571,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 0.625,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -7.9706,
                    'dSupport': 15.9319,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            },
            'UNEF 11/16': {
                'ext': {
                    'pitch': 1.05833,
                    'rRotation': 8.1173,
                    'dSupport': 16.2438,
                    'sectionProfile': [
                        [0, -0.3969],
                        [0, 0.3969],
                        [0.5728, 0.0661],
                        [0.5728, -0.0661]
                    ]
                },
                'sortSize': 0.6875,
                'int': {
                    'pitch': 1.05833,
                    'rRotation': -8.7646,
                    'dSupport': 17.5201,
                    'sectionProfile': [
                        [0, 0.463],
                        [0, -0.463],
                        [0.5728, -0.1323],
                        [0.5728, 0.1323]
                    ]
                }
            },
            'UNEF 3/4': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 8.7928,
                    'dSupport': 17.5967,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.75,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -9.5614,
                    'dSupport': 19.1117,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNEF 13/16': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 9.5862,
                    'dSupport': 19.1834,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.8125,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -10.3554,
                    'dSupport': 20.6998,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNEF 7/8': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 10.3796,
                    'dSupport': 20.7702,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.875,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -11.1495,
                    'dSupport': 22.2879,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNEF 15/16': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 11.173,
                    'dSupport': 22.357,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 0.9375,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -11.9435,
                    'dSupport': 23.876,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNEF 1': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 11.9664,
                    'dSupport': 23.9439,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 1,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -12.7375,
                    'dSupport': 25.464,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            'UNEF 1 1/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 12.6814,
                    'dSupport': 25.3751,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.0625,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -13.5332,
                    'dSupport': 27.0541,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 1/8': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 13.4749,
                    'dSupport': 26.962,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.125,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -14.3272,
                    'dSupport': 28.6421,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 3/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 14.2684,
                    'dSupport': 28.5489,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.1875,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -15.1211,
                    'dSupport': 30.2301,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 1/4': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 15.0618,
                    'dSupport': 30.1359,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.25,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -15.9151,
                    'dSupport': 31.818,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 5/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 15.8553,
                    'dSupport': 31.7228,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.3125,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -16.7091,
                    'dSupport': 33.406,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 3/8': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 16.6488,
                    'dSupport': 33.3098,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.375,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -17.5031,
                    'dSupport': 34.9939,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 7/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 17.4423,
                    'dSupport': 34.8968,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.4375,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -18.297,
                    'dSupport': 36.5818,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 1/2': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 18.2358,
                    'dSupport': 36.4838,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.5,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -19.091,
                    'dSupport': 38.1697,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 9/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 19.0293,
                    'dSupport': 38.0708,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.5625,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -19.8849,
                    'dSupport': 39.7576,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 5/8': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 19.8228,
                    'dSupport': 39.6579,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.625,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -20.6788,
                    'dSupport': 41.3455,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF 1 11/16': {
                'ext': {
                    'pitch': 1.41111,
                    'rRotation': 20.6164,
                    'dSupport': 41.2449,
                    'sectionProfile': [
                        [0, -0.5292],
                        [0, 0.5292],
                        [0.7638, 0.0882],
                        [0.7638, -0.0882]
                    ]
                },
                'sortSize': 1.6875,
                'int': {
                    'pitch': 1.41111,
                    'rRotation': -21.4728,
                    'dSupport': 42.9333,
                    'sectionProfile': [
                        [0, 0.6174],
                        [0, -0.6174],
                        [0.7638, -0.1764],
                        [0.7638, 0.1764]
                    ]
                }
            },
            'UNEF #12': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 2.2812,
                    'dSupport': 4.5693,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 12,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -2.7695,
                    'dSupport': 5.5321,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            }
        },
        'numbered': {
            '32 UN': {
                'ext': {
                    'pitch': 0.79375,
                    'rRotation': 9.8517,
                    'dSupport': 19.7103,
                    'sectionProfile': [
                        [0, -0.2977],
                        [0, 0.2977],
                        [0.4296, 0.0496],
                        [0.4296, -0.0496]
                    ]
                },
                'sortSize': 0.8125,
                'int': {
                    'pitch': 0.79375,
                    'rRotation': -10.3492,
                    'dSupport': 20.6914,
                    'sectionProfile': [
                        [0, 0.3473],
                        [0, -0.3473],
                        [0.4296, -0.0992],
                        [0.4296, 0.0992]
                    ]
                }
            },
            '28 UN': {
                'ext': {
                    'pitch': 0.907143,
                    'rRotation': 18.5164,
                    'dSupport': 37.0406,
                    'sectionProfile': [
                        [0, -0.3402],
                        [0, 0.3402],
                        [0.491, 0.0567],
                        [0.491, -0.0567]
                    ]
                },
                'sortSize': 1.5,
                'int': {
                    'pitch': 0.907143,
                    'rRotation': -19.0846,
                    'dSupport': 38.1614,
                    'sectionProfile': [
                        [0, 0.3969],
                        [0, -0.3969],
                        [0.491, -0.1134],
                        [0.491, 0.1134]
                    ]
                }
            },
            '20 UN': {
                'ext': {
                    'pitch': 1.27,
                    'rRotation': 37.3597,
                    'dSupport': 74.7304,
                    'sectionProfile': [
                        [0, -0.4763],
                        [0, 0.4763],
                        [0.6874, 0.0794],
                        [0.6874, -0.0794]
                    ]
                },
                'sortSize': 3,
                'int': {
                    'pitch': 1.27,
                    'rRotation': -38.143,
                    'dSupport': 76.2749,
                    'sectionProfile': [
                        [0, 0.5556],
                        [0, -0.5556],
                        [0.6874, -0.1588],
                        [0.6874, 0.1588]
                    ]
                }
            },
            '4 UN': {
                'ext': {
                    'pitch': 6.35,
                    'rRotation': 72.6519,
                    'dSupport': 145.3589,
                    'sectionProfile': [
                        [0, -2.3812],
                        [0, 2.3812],
                        [3.437, 0.3969],
                        [3.437, -0.3969]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 6.35,
                    'rRotation': -76.2902,
                    'dSupport': 152.5254,
                    'sectionProfile': [
                        [0, 2.7781],
                        [0, -2.7781],
                        [3.437, -0.7937],
                        [3.437, 0.7937]
                    ]
                }
            },
            '6 UN': {
                'ext': {
                    'pitch': 4.23333,
                    'rRotation': 73.8161,
                    'dSupport': 147.6689,
                    'sectionProfile': [
                        [0, -1.5875],
                        [0, 1.5875],
                        [2.2914, 0.2646],
                        [2.2914, -0.2646]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 4.23333,
                    'rRotation': -76.2752,
                    'dSupport': 152.5137,
                    'sectionProfile': [
                        [0, 1.8521],
                        [0, -1.8521],
                        [2.2914, -0.5292],
                        [2.2914, 0.5292]
                    ]
                }
            },
            '8 UN': {
                'ext': {
                    'pitch': 3.175,
                    'rRotation': 74.3995,
                    'dSupport': 148.8265,
                    'sectionProfile': [
                        [0, -1.1906],
                        [0, 1.1906],
                        [1.7185, 0.1984],
                        [1.7185, -0.1984]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 3.175,
                    'rRotation': -76.2666,
                    'dSupport': 152.5057,
                    'sectionProfile': [
                        [0, 1.3891],
                        [0, -1.3891],
                        [1.7185, -0.3969],
                        [1.7185, 0.3969]
                    ]
                }
            },
            '12 UN': {
                'ext': {
                    'pitch': 2.11667,
                    'rRotation': 74.9844,
                    'dSupport': 149.987,
                    'sectionProfile': [
                        [0, -0.7937],
                        [0, 0.7937],
                        [1.1457, 0.1323],
                        [1.1457, -0.1323]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 2.11667,
                    'rRotation': -76.2568,
                    'dSupport': 152.4954,
                    'sectionProfile': [
                        [0, 0.926],
                        [0, -0.926],
                        [1.1457, -0.2646],
                        [1.1457, 0.2646]
                    ]
                }
            },
            '16 UN': {
                'ext': {
                    'pitch': 1.5875,
                    'rRotation': 75.2776,
                    'dSupport': 150.569,
                    'sectionProfile': [
                        [0, -0.5953],
                        [0, 0.5953],
                        [0.8593, 0.0992],
                        [0.8593, -0.0992]
                    ]
                },
                'sortSize': 6,
                'int': {
                    'pitch': 1.5875,
                    'rRotation': -76.2513,
                    'dSupport': 152.4888,
                    'sectionProfile': [
                        [0, 0.6945],
                        [0, -0.6945],
                        [0.8593, -0.1984],
                        [0.8593, 0.1984]
                    ]
                }
            }
        }
    },
    'british': {
        'G1/16': {
            'ext': {
                'pitch': 0.907,
                'rRotation': 3.1631,
                'dSupport': 6.3625,
                'sectionProfile': [
                    [0, -0.4252],
                    [0, 0.4252],
                    [0.571, 0.1279],
                    [0.571, -0.1279]
                ]
            },
            'sortSize': 0.0625,
            'int': {
                'pitch': 0.907,
                'rRotation': -3.9789,
                'dSupport': 7.9215,
                'sectionProfile': [
                    [0, 0.4252],
                    [0, -0.4252],
                    [0.554, -0.1368],
                    [0.554, 0.1368]
                ]
            }
        },
        'G1/8': {
            'ext': {
                'pitch': 0.907,
                'rRotation': 4.1656,
                'dSupport': 8.3675,
                'sectionProfile': [
                    [0, -0.4252],
                    [0, 0.4252],
                    [0.571, 0.1279],
                    [0.571, -0.1279]
                ]
            },
            'sortSize': 0.125,
            'int': {
                'pitch': 0.907,
                'rRotation': -4.9814,
                'dSupport': 9.9265,
                'sectionProfile': [
                    [0, 0.4252],
                    [0, -0.4252],
                    [0.554, -0.1368],
                    [0.554, 0.1368]
                ]
            }
        },
        'G1/4': {
            'ext': {
                'pitch': 1.337,
                'rRotation': 5.5574,
                'dSupport': 11.1684,
                'sectionProfile': [
                    [0, -0.6267],
                    [0, 0.6267],
                    [0.8847, 0.1662],
                    [0.8847, -0.1662]
                ]
            },
            'sortSize': 0.25,
            'int': {
                'pitch': 1.337,
                'rRotation': -6.7436,
                'dSupport': 13.4336,
                'sectionProfile': [
                    [0, 0.6267],
                    [0, -0.6267],
                    [0.8359, -0.1916],
                    [0.8359, 0.1916]
                ]
            }
        },
        'G3/8': {
            'ext': {
                'pitch': 1.337,
                'rRotation': 7.3099,
                'dSupport': 14.6734,
                'sectionProfile': [
                    [0, -0.6267],
                    [0, 0.6267],
                    [0.8847, 0.1662],
                    [0.8847, -0.1662]
                ]
            },
            'sortSize': 0.375,
            'int': {
                'pitch': 1.337,
                'rRotation': -8.4961,
                'dSupport': 16.9386,
                'sectionProfile': [
                    [0, 0.6267],
                    [0, -0.6267],
                    [0.8359, -0.1916],
                    [0.8359, 0.1916]
                ]
            }
        },
        'G1/2': {
            'ext': {
                'pitch': 1.814,
                'rRotation': 9.0987,
                'dSupport': 18.2701,
                'sectionProfile': [
                    [0, -0.8503],
                    [0, 0.8503],
                    [1.2339, 0.208],
                    [1.2339, -0.208]
                ]
            },
            'sortSize': 0.5,
            'int': {
                'pitch': 1.814,
                'rRotation': -10.6943,
                'dSupport': 21.3159,
                'sectionProfile': [
                    [0, 0.8503],
                    [0, -0.8503],
                    [1.1696, -0.2415],
                    [1.1696, 0.2415]
                ]
            }
        },
        'G5/8': {
            'ext': {
                'pitch': 1.814,
                'rRotation': 10.0767,
                'dSupport': 20.2261,
                'sectionProfile': [
                    [0, -0.8503],
                    [0, 0.8503],
                    [1.2339, 0.208],
                    [1.2339, -0.208]
                ]
            },
            'sortSize': 0.625,
            'int': {
                'pitch': 1.814,
                'rRotation': -11.6723,
                'dSupport': 23.2719,
                'sectionProfile': [
                    [0, 0.8503],
                    [0, -0.8503],
                    [1.1696, -0.2415],
                    [1.1696, 0.2415]
                ]
            }
        },
        'G3/4': {
            'ext': {
                'pitch': 1.814,
                'rRotation': 11.8417,
                'dSupport': 23.7561,
                'sectionProfile': [
                    [0, -0.8503],
                    [0, 0.8503],
                    [1.2339, 0.208],
                    [1.2339, -0.208]
                ]
            },
            'sortSize': 0.75,
            'int': {
                'pitch': 1.814,
                'rRotation': -13.4373,
                'dSupport': 26.8019,
                'sectionProfile': [
                    [0, 0.8503],
                    [0, -0.8503],
                    [1.1696, -0.2415],
                    [1.1696, 0.2415]
                ]
            }
        },
        'G7/8': {
            'ext': {
                'pitch': 1.814,
                'rRotation': 13.7217,
                'dSupport': 27.5161,
                'sectionProfile': [
                    [0, -0.8503],
                    [0, 0.8503],
                    [1.2339, 0.208],
                    [1.2339, -0.208]
                ]
            },
            'sortSize': 0.875,
            'int': {
                'pitch': 1.814,
                'rRotation': -15.3173,
                'dSupport': 30.5619,
                'sectionProfile': [
                    [0, 0.8503],
                    [0, -0.8503],
                    [1.1696, -0.2415],
                    [1.1696, 0.2415]
                ]
            }
        },
        'G1': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 14.8697,
                'dSupport': 29.8319,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5909, 0.2542],
                    [1.5909, -0.2542]
                ]
            },
            'sortSize': 1,
            'int': {
                'pitch': 2.309,
                'rRotation': -16.9003,
                'dSupport': 33.7081,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5209, -0.2906],
                    [1.5209, 0.2906]
                ]
            }
        },
        'G1 1/8': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 17.1937,
                'dSupport': 34.4799,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5909, 0.2542],
                    [1.5909, -0.2542]
                ]
            },
            'sortSize': 1.125,
            'int': {
                'pitch': 2.309,
                'rRotation': -19.2243,
                'dSupport': 38.3561,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5209, -0.2906],
                    [1.5209, 0.2906]
                ]
            }
        },
        'G1 1/4': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 19.2002,
                'dSupport': 38.4929,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5909, 0.2542],
                    [1.5909, -0.2542]
                ]
            },
            'sortSize': 1.25,
            'int': {
                'pitch': 2.309,
                'rRotation': -21.2308,
                'dSupport': 42.3691,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5209, -0.2906],
                    [1.5209, 0.2906]
                ]
            }
        },
        'G1 1/2': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 22.1467,
                'dSupport': 44.3859,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5909, 0.2542],
                    [1.5909, -0.2542]
                ]
            },
            'sortSize': 1.5,
            'int': {
                'pitch': 2.309,
                'rRotation': -24.1773,
                'dSupport': 48.2621,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5209, -0.2906],
                    [1.5209, 0.2906]
                ]
            }
        },
        'G1 3/4': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 25.1182,
                'dSupport': 50.3289,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5909, 0.2542],
                    [1.5909, -0.2542]
                ]
            },
            'sortSize': 1.75,
            'int': {
                'pitch': 2.309,
                'rRotation': -27.1488,
                'dSupport': 54.2051,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5209, -0.2906],
                    [1.5209, 0.2906]
                ]
            }
        },
        'G2': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 28.0522,
                'dSupport': 56.1969,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5909, 0.2542],
                    [1.5909, -0.2542]
                ]
            },
            'sortSize': 2,
            'int': {
                'pitch': 2.309,
                'rRotation': -30.0828,
                'dSupport': 60.0731,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5209, -0.2906],
                    [1.5209, 0.2906]
                ]
            }
        },
        'G2 1/4': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 31.091,
                'dSupport': 62.2744,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 2.25,
            'int': {
                'pitch': 2.309,
                'rRotation': -33.14,
                'dSupport': 66.1876,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G2 1/2': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 35.828,
                'dSupport': 71.7484,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 2.5,
            'int': {
                'pitch': 2.309,
                'rRotation': -37.877,
                'dSupport': 75.6616,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G2 3/4': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 39.003,
                'dSupport': 78.0984,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 2.75,
            'int': {
                'pitch': 2.309,
                'rRotation': -41.052,
                'dSupport': 82.0116,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G3': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 42.178,
                'dSupport': 84.4484,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 3,
            'int': {
                'pitch': 2.309,
                'rRotation': -44.227,
                'dSupport': 88.3616,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G3 1/2': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 48.401,
                'dSupport': 96.8944,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 3.5,
            'int': {
                'pitch': 2.309,
                'rRotation': -50.45,
                'dSupport': 100.8076,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G4': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 54.751,
                'dSupport': 109.5944,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 4,
            'int': {
                'pitch': 2.309,
                'rRotation': -56.8,
                'dSupport': 113.5076,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G4 1/2': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 61.101,
                'dSupport': 122.2944,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 4.5,
            'int': {
                'pitch': 2.309,
                'rRotation': -63.15,
                'dSupport': 126.2076,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G5': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 67.451,
                'dSupport': 134.9944,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 5,
            'int': {
                'pitch': 2.309,
                'rRotation': -69.5,
                'dSupport': 138.9076,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G5 1/2': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 73.801,
                'dSupport': 147.6944,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 5.5,
            'int': {
                'pitch': 2.309,
                'rRotation': -75.85,
                'dSupport': 151.6076,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        },
        'G6': {
            'ext': {
                'pitch': 2.309,
                'rRotation': 80.151,
                'dSupport': 160.3944,
                'sectionProfile': [
                    [0, -1.0823],
                    [0, 1.0823],
                    [1.5816, 0.259],
                    [1.5816, -0.259]
                ]
            },
            'sortSize': 6,
            'int': {
                'pitch': 2.309,
                'rRotation': -82.2,
                'dSupport': 164.3076,
                'sectionProfile': [
                    [0, 1.0823],
                    [0, -1.0823],
                    [1.5301, -0.2858],
                    [1.5301, 0.2858]
                ]
            }
        }
    },
    'bottle': {
        'int': {
            'pitch': 2.7,
            'rRotation': -14.406,
            'dSupport': 27.66,
            'sectionProfile': [
                [0, 1.212894698],
                [0, -0.762894698],
                [1.656, -0.470897218],
                [1.656, 0.61015999]
            ]
        },
        'ext': {
            'pitch': 2.7,
            'rRotation': 11.52381,
            'dSupport': 24.2,
            'sectionProfile': [
                [0, -0.987894698],
                [0, 0.987894698],
                [2.17619, 0.604173686],
                [2.17619, -0.195826314]
            ]
        },
        'sortSize': 1
    }
}

const metricCoarseLookup = [
    "M0.3x0.09",
    "M1.1x0.25",
    "M1.6x0.3",
    "M2.3x0.45",
    "M4.5x0.75",
    "M6x0.8",
    "M7x0.75",
    "M8x1",
    "M9x1.25",
    "M10x1.25",
    "M11x1.5",
    "M12x1.5",
    "M14x1.5",
    "M15x1.5",
    "M16x1.6",
    "M17x1.5",
    "M18x2",
    "M20x2",
    "M22x3",
    "M24x2.5",
    "M25x2",
    "M27x2",
    "M28x2",
    "M30x3",
    "M32x2",
    "M33x3",
    "M36x3",
    "M39x3",
    "M40x3",
    "M42x4",
    "M45x4",
    "M48x4",
    "M50x4",
    "M52x4",
    "M55x4",
    "M56x4",
    "M58x4",
    "M60x4",
    "M62x4",
    "M64x5.5",
    "M65x4",
    "M68x6",
    "M70x6",
    "M72x6",
    "M75x6",
    "M76x6",
    "M80x6",
    "M85x6",
    "M90x6",
    "M95x6",
    "M100x6",
    "M105x6",
    "M110x6",
    "M115x6",
    "M120x6",
    "M125x8",
    "M130x8",
    "M135x6",
    "M140x8",
    "M145x6",
    "M150x8",
    "M155x6",
    "M160x8",
    "M165x6",
    "M170x8",
    "M175x6",
    "M180x8",
    "M185x6",
    "M190x8",
    "M195x6",
    "M200x8",
    "M205x6",
    "M210x8",
    "M215x6",
    "M220x8",
    "M225x6",
    "M230x6",
    "M235x6",
    "M240x8",
    "M245x6",
    "M250x8",
    "M255x6",
    "M260x8",
    "M265x6",
    "M270x6",
    "M275x6",
    "M280x8",
    "M285x6",
    "M290x6",
    "M295x6",
    "M300x8",
    "M310x6",
    "M320x6",
    "M330x6",
    "M340x6",
    "M350x6",
    "M360x6",
    "M370x6",
    "M380x6",
    "M390x6",
    "M400x6",
]

const metricFineLookup = [
    "M0.3x0.08",
    "M1.1x0.2",
    "M1.6x0.2",
    "M2.3x0.4",
    "M4.5x0.5",
    "M6x0.75",
    "M6x0.7",
    "M6x0.5",
    "M7x0.5",
    "M8x0.8",
    "M8x0.75",
    "M8x0.5",
    "M9x1",
    "M9x0.75",
    "M9x0.5",
    "M10x1.12",
    "M10x1",
    "M10x0.75",
    "M10x0.5",
    "M11x1",
    "M11x0.75",
    "M11x0.5",
    "M12x1.25",
    "M12x1",
    "M12x0.75",
    "M12x0.5",
    "M14x1.25",
    "M14x1",
    "M14x0.75",
    "M14x0.5",
    "M15x1",
    "M16x1.5",
    "M16x1.25",
    "M16x1",
    "M16x0.75",
    "M16x0.5",
    "M17x1",
    "M18x1.5",
    "M18x1.25",
    "M18x1",
    "M18x0.75",
    "M18x0.5",
    "M20x1.5",
    "M20x1",
    "M20x0.75",
    "M20x0.5",
    "M22x2",
    "M22x1.5",
    "M22x1",
    "M22x0.75",
    "M22x0.5",
    "M24x2",
    "M24x1.5",
    "M24x1",
    "M24x0.75",
    "M25x1.5",
    "M25x1",
    "M27x1.5",
    "M27x1",
    "M27x0.75",
    "M28x1.5",
    "M28x1",
    "M30x2.5",
    "M30x2",
    "M30x1.5",
    "M30x1",
    "M30x0.75",
    "M32x1.5",
    "M33x2",
    "M33x1.5",
    "M33x1",
    "M33x0.75",
    "M36x2",
    "M36x1.5",
    "M36x1",
    "M39x2",
    "M39x1.5",
    "M39x1",
    "M40x2.5",
    "M40x2",
    "M40x1.5",
    "M42x3",
    "M42x2",
    "M42x1.5",
    "M42x1",
    "M45x3",
    "M45x2",
    "M45x1.5",
    "M45x1",
    "M48x3",
    "M48x2",
    "M48x1.5",
    "M50x3",
    "M50x2",
    "M50x1.5",
    "M52x3",
    "M52x2",
    "M52x1.5",
    "M55x3",
    "M55x2",
    "M55x1.5",
    "M56x3",
    "M56x2",
    "M56x1.5",
    "M56x1",
    "M58x3",
    "M58x2",
    "M58x1.5",
    "M60x3",
    "M60x2",
    "M60x1.5",
    "M60x1",
    "M62x3",
    "M62x2",
    "M62x1.5",
    "M64x4",
    "M64x3",
    "M64x2",
    "M64x1.5",
    "M64x1",
    "M65x3",
    "M65x2",
    "M65x1.5",
    "M68x4",
    "M68x3",
    "M68x2",
    "M68x1.5",
    "M68x1",
    "M70x4",
    "M70x3",
    "M70x2",
    "M70x1.5",
    "M72x4",
    "M72x3",
    "M72x2",
    "M72x1.5",
    "M72x1",
    "M75x4",
    "M75x3",
    "M75x2",
    "M75x1.5",
    "M76x4",
    "M76x3",
    "M76x2",
    "M76x1.5",
    "M76x1",
    "M80x4",
    "M80x3",
    "M80x2",
    "M80x1.5",
    "M80x1",
    "M85x4",
    "M85x3",
    "M85x2",
    "M85x1.5",
    "M90x4",
    "M90x3",
    "M90x2",
    "M90x1.5",
    "M95x4",
    "M95x3",
    "M95x2",
    "M95x1.5",
    "M100x4",
    "M100x3",
    "M100x2",
    "M100x1.5",
    "M105x4",
    "M105x3",
    "M105x2",
    "M105x1.5",
    "M110x4",
    "M110x3",
    "M110x2",
    "M110x1.5",
    "M115x4",
    "M115x3",
    "M115x2",
    "M115x1.5",
    "M120x4",
    "M120x3",
    "M120x2",
    "M120x1.5",
    "M125x6",
    "M125x4",
    "M125x3",
    "M125x2",
    "M125x1.5",
    "M130x6",
    "M130x4",
    "M130x3",
    "M130x2",
    "M130x1.5",
    "M135x4",
    "M135x3",
    "M135x2",
    "M135x1.5",
    "M140x6",
    "M140x4",
    "M140x3",
    "M140x2",
    "M140x1.5",
    "M145x4",
    "M145x3",
    "M145x2",
    "M145x1.5",
    "M150x6",
    "M150x4",
    "M150x3",
    "M150x2",
    "M150x1.5",
    "M155x4",
    "M155x3",
    "M155x2",
    "M160x6",
    "M160x4",
    "M160x3",
    "M160x2",
    "M165x4",
    "M165x3",
    "M165x2",
    "M170x6",
    "M170x4",
    "M170x3",
    "M170x2",
    "M175x4",
    "M175x3",
    "M175x2",
    "M180x6",
    "M180x4",
    "M180x3",
    "M180x2",
    "M185x4",
    "M185x3",
    "M185x2",
    "M190x6",
    "M190x4",
    "M190x3",
    "M190x2",
    "M195x4",
    "M195x3",
    "M195x2",
    "M200x6",
    "M200x4",
    "M200x3",
    "M200x2",
    "M205x4",
    "M205x3",
    "M205x2",
    "M210x6",
    "M210x4",
    "M210x3",
    "M210x2",
    "M215x4",
    "M215x3",
    "M220x6",
    "M220x4",
    "M220x3",
    "M220x2",
    "M225x4",
    "M225x3",
    "M225x2",
    "M230x4",
    "M230x3",
    "M230x2",
    "M235x4",
    "M235x3",
    "M240x6",
    "M240x4",
    "M240x3",
    "M240x2",
    "M245x4",
    "M245x3",
    "M245x2",
    "M250x6",
    "M250x4",
    "M250x3",
    "M250x2",
    "M255x4",
    "M255x3",
    "M260x6",
    "M260x4",
    "M260x3",
    "M265x4",
    "M265x3",
    "M270x4",
    "M270x3",
    "M275x4",
    "M275x3",
    "M280x6",
    "M280x4",
    "M280x3",
    "M285x4",
    "M285x3",
    "M290x4",
    "M290x3",
    "M295x4",
    "M295x3",
    "M300x6",
    "M300x4",
    "M300x3",
    "M310x4",
    "M320x4",
    "M330x4",
    "M340x4",
    "M350x4",
    "M360x4",
    "M370x4",
    "M380x4",
    "M390x4",
    "M400x4",
]

const unifiedCoarseLookup = [
    "UNC 1/4",
    "UNC 5/16",
    "UNC 3/8",
    "UNC 7/16",
    "UNC 1/2",
    "UNC 9/16",
    "UNC 5/8",
    "UNC 3/4",
    "UNC 7/8",
    "UNC #1",
    "UNC 1",
    "UNC 1 1/8",
    "UNC 1 1/4",
    "UNC 1 3/8",
    "UNC 1 1/2",
    "UNC 1 3/4",
    "UNC #2",
    "UNC 2",
    "UNC 2 1/4",
    "UNC 2 1/2",
    "UNC 2 3/4",
    "UNC #3",
    "UNC 3",
    "UNC 3 1/4",
    "UNC 3 1/2",
    "UNC 3 3/4",
    "UNC #4",
    "UNC 4",
    "UNC #5",
    "UNC #6",
    "UNC #8",
    "UNC #10",
    "UNC #12",
]

const unifiedFineLookup = [
    "UNF #0",
    "UNF 1/4",
    "UNF 5/16",
    "UNF 3/8",
    "UNF 7/16",
    "UNF 1/2",
    "UNF 9/16",
    "UNF 5/8",
    "UNF 3/4",
    "UNF 7/8",
    "UNF #1",
    "UNF 1",
    "UNF 1 1/8",
    "UNF 1 1/4",
    "UNF 1 3/8",
    "UNF 1 1/2",
    "UNF #2",
    "UNF #3",
    "UNF #4",
    "UNF #5",
    "UNF #6",
    "UNF #8",
    "UNF #10",
    "UNF #12",
]

const unifiedExtraFineLookup = [
    "UNEF 1/4",
    "UNEF 5/16",
    "UNEF 3/8",
    "UNEF 7/16",
    "UNEF 1/2",
    "UNEF 9/16",
    "UNEF 5/8",
    "UNEF 11/16",
    "UNEF 3/4",
    "UNEF 13/16",
    "UNEF 7/8",
    "UNEF 15/16",
    "UNEF 1",
    "UNEF 1 1/16",
    "UNEF 1 1/8",
    "UNEF 1 3/16",
    "UNEF 1 1/4",
    "UNEF 1 5/16",
    "UNEF 1 3/8",
    "UNEF 1 7/16",
    "UNEF 1 1/2",
    "UNEF 1 9/16",
    "UNEF 1 5/8",
    "UNEF 1 11/16",
    "UNEF #12",
]

const unifiedNumberedLookup = [
    "32 UN",
    "28 UN",
    "20 UN",
    "4 UN",
    "6 UN",
    "8 UN",
    "12 UN",
    "16 UN",
]

const britishLookup = [
    "G1/16",
    "G1/8",
    "G1/4",
    "G3/8",
    "G1/2",
    "G5/8",
    "G3/4",
    "G7/8",
    "G1",
    "G1 1/8",
    "G1 1/4",
    "G1 1/2",
    "G1 3/4",
    "G2",
    "G2 1/4",
    "G2 1/2",
    "G2 3/4",
    "G3",
    "G3 1/2",
    "G4",
    "G4 1/2",
    "G5",
    "G5 1/2",
    "G6",
]

