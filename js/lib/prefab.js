import { Solid, Plane, Vector, Point } from "../lib/math.js";

export class Prefabs {

    static headRoot(){
        
        var cPoints = [
            new Point(new Vector(-0.045,0.675)),
            new Point(new Vector(0.041,1)),
            new Point(new Vector(0.041,0.675)),
            new Point(new Vector(-0.045,1)),
            new Point(new Vector(-0.131,1)),
            new Point(new Vector(0.127,1)),
            new Point(new Vector(0.127,1.25)),
            new Point(new Vector(-0.131,1.25)),

        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position.x *= 1.7;
            cPoints[i].position.y *= 1.7;
        }

        var b= new Solid(
            new Vector(0, 0.05),
            null,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.rootElement,
            0.005
        );

        b.collider = 
        [
            0,1,2,
            0,1,3,
            4,5,6,
            5,6,7,
            4,5,7,

        ];

        b.needleIndex = 0;

        return b;
    }

    static anvilRoot(){
        var cPoints = [
            new Point(new Vector(-0.35,-0.55)),
            new Point(new Vector(0.35,-0.8)),
            new Point(new Vector(-0.35,-0.8)),
            new Point(new Vector(0.35,-0.55)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position.x *= 1.7;
            cPoints[i].position.y *= 1.7;
        }

        var b= new Solid(
            new Vector(0, 0.05),
            null,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.rootElement,
            0.005
        );

        b.collider = 
        [
            0,1,2,
            0,1,3,
        ];

        b.needleIndex = 0;

        return b;
    }

    static spawnHead_01(){

        var rPoints = [
            new Point(new Vector(0,0)),//0
            new Point(new Vector(4.957,0)),
            new Point(new Vector(4.957,5.005)),
            new Point(new Vector(3.295,5.005)),
            new Point(new Vector(3.592,5.302)),
            new Point(new Vector(3.592,6.443)),
            new Point(new Vector(1.935,8.25)),
            new Point(new Vector(1.957,8.27)),
            new Point(new Vector(1.831,8.427)),//8
            new Point(new Vector(1.69,8.299)),
            new Point(new Vector(2.721,6.449)),
            new Point(new Vector(2.857,6.246)),
            new Point(new Vector(2.542,5.735)),
            new Point(new Vector(1.603,5.421)),
            new Point(new Vector(1.633,5.005)),
            new Point(new Vector(0,5.005)),//15
        ]
        
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.34);
        }
        var offset = rPoints[9].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }
        var offset = new Vector(rPoints[8].position.x, rPoints[8].position.y);
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
            // rPoints[i].position = rPoints[i].position.minus(new Vector(0, 0.1));
            rPoints[i].position = rPoints[i].position.plus(new Vector(0, 0));
            rPoints[i].position.x *= -1;
        }
        var offset = new Vector(0, -0.1);

        rPoints[9].position = new Vector(-0.025,0.03);

        var cPoints = [
            new Point(new Vector(0,0)),
            new Point(new Vector(0.3523,0.3968)),
            new Point(new Vector(-0.025,0.03)),
            new Point(new Vector(0.2054,0.4367)),
            new Point(new Vector(0.3523,0.6254)),
            new Point(new Vector(0.1418,0.5397)),
            new Point(new Vector(0.2923,0.6859)),
            new Point(new Vector(-0.0453,0.6011)),
            new Point(new Vector(-0.0395,0.6859)),
            new Point(new Vector(0.,0.)),

            new Point(new Vector(-0.0,0.6859)),//10
            new Point(new Vector(0.12,1)),
            new Point(new Vector(0.12,0.6859)),
            new Point(new Vector(-0.0,1)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position.x *= 1.7;
            cPoints[i].position.y *= 1.7;
        }

        var b= new Solid(
            new Vector(0, 0.05),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.005
        );
        // b.rotateAroundPoint(b.position, 180);
        // b.offset(-1.749, -8.419 / 4);
        // b.offset(b.points[8].position.x * -1,b.points[8].position.y * -1);
        b.collider = 
        [
            0,1,2,
            2,1,3,
            3,1,4,
            3,4,5,
            5,4,6,
            5,6,8,
            5,8,7,

            10,12,11,
            10,11,13
            // 10,12,13

        ];

        b.needleIndex = 0;

        return b;
    }

    static spawnAnvil_01(){

        var rPoints = 
        [
            new Point(new Vector(0,108)),
            new Point(new Vector(0,2.7)),
            new Point(new Vector(2.7,0)),
            new Point(new Vector(9.7,0)),
            new Point(new Vector(14.2,0.7)),
            new Point(new Vector(18,2.5)),
            new Point(new Vector(21,5.2)),
            new Point(new Vector(46.2,32.7)),
            new Point(new Vector(47.8,34)),//8
            new Point(new Vector(48.8,34.2)),//river bot center
            new Point(new Vector(97.5 - 47.8,34)),
            new Point(new Vector(97.5 - 46.2,32.7)),
            new Point(new Vector(97.5 - 21,5.2)),
            new Point(new Vector(97.5 - 18,2.5)),
            new Point(new Vector(97.5 - 14.2,0.7)),
            new Point(new Vector(97.5 - 9.7,0)),
            new Point(new Vector(97.5 - 2.7,0)),
            new Point(new Vector(97.5 - 0,2.7)),
            new Point(new Vector(97.5 - 0,108)),
        ];

        // for(let i = 10;i < rPoints.length;i++){
        //     rPoints[i].position.x += 97.5;
        // }

        
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.002);
        }
        var offset = rPoints[9].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }
        var offset = new Vector(0, rPoints[2].position.y);
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
            // rPoints[i].position = rPoints[i].position.minus(new Vector(0, 0.1));
            rPoints[i].position = rPoints[i].position.plus(new Vector(0, 0.07068946809815344));
        }
        var offset = new Vector(0, -0.1);

        var mPoints = 
        [
            new Point(new Vector(-0.1, 0.07068946809815344)),//lt
            new Point(new Vector(-0.06, 0.07068946809815344)),//l_river
            new Point(new Vector(-0.055, 0.07)),//l_river_1
            new Point(new Vector(-0.05, 0.065)),//l_river_2
            new Point(new Vector(-0.0025, -0.0985)),
            new Point(new Vector(0, -0.15)),//bottom
            new Point(new Vector(0.0025, -0.0985)),
            new Point(new Vector(0.05, 0.065)),//l_river_2
            new Point(new Vector(0.055, 0.07)),//l_river_1
            new Point(new Vector(0.06, 0.07068946809815344)),//r_river
            new Point(new Vector(0.1, 0.07068946809815344)),//rt
            new Point(new Vector(0.1, -0.25)),//rb
            new Point(new Vector(-0.1, -0.25)),//lb
        ];

        var b = new Solid(
            new Vector(0,-0.07068946809815344),
            rPoints,
            [
                new Point(new Vector(0.0654, 0.0707)),
                new Point(new Vector(0., 0.0010)),
                new Point(new Vector(-0.0654, 0.0707)),
                new Point(new Vector(0.1, -0.1455)),
                new Point(new Vector(-0.1, -0.1455)),
                
                new Point(new Vector(0.0654, 0.0707)),
                new Point(new Vector(0.1, -0.1455)),
                new Point(new Vector(0.1, 0.0707)),
                
                new Point(new Vector(-0.0654, 0.0707)),
                new Point(new Vector(-0.1, -0.1455)),
                new Point(new Vector(-0.1, 0.0707)),
                
                new Point(new Vector(-0.1,-0.1455)),
                new Point(new Vector(-0.1,-0.6493)),
                new Point(new Vector(0.1,-0.6493)),
                new Point(new Vector(0.1,-0.1455)),
                
                new Point(new Vector(-0.3,-0.6493)),
                new Point(new Vector(0.3,-0.8293)),
                new Point(new Vector(-0.3,-0.8293)),
                new Point(new Vector(0.3,-0.6493)),
            ],
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )


        b.collider = [
            0,1,3,
            1,2,4,
            4,3,1,
            
            5,6,7,
            8,10,9,
            11,12,13,
            11,13,14,

            15,17,16,
            15,16,18,
        ]

        return b;
    }
    

    static spawnAnvil_02(){

        var rPoints = 
        [
            // new Point(new Vector(0,2.892)),
            // new Point(new Vector(0,3.626)),
            // new Point(new Vector(4.6,3.672)),
            // new Point(new Vector(2.708,3.672)),
            // new Point(new Vector(2.754,3.626)),
            // new Point(new Vector(2.754,2.892)),
            // new Point(new Vector(2.708,2.846)),
            new Point(new Vector(1.928,2.846)),
            new Point(new Vector(1.928,0.023)),
            new Point(new Vector(1.905,0.000)),
            new Point(new Vector(1.705,0.000)),
            new Point(new Vector(1.684,0.003)),
            new Point(new Vector(1.662,0.015)),
            new Point(new Vector(1.647,0.032)),
            new Point(new Vector(1.636,0.062)),
            new Point(new Vector(1.423,0.857)),

            new Point(new Vector((1.423 + 1.331) / 2,0.857)),

            new Point(new Vector(1.331,0.857)),
            new Point(new Vector(1.118,0.061)),//11
            new Point(new Vector(1.113,0.043)),
            new Point(new Vector(1.102,0.026)),
            new Point(new Vector(1.089,0.013)),
            new Point(new Vector(1.074,0.005)),
            new Point(new Vector(1.049,0.000)),
            new Point(new Vector(0.849,0.000)),
            new Point(new Vector(0.826,0.023)),
            new Point(new Vector(0.826,2.846)),//19
        ];

        
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.2);
        }
        var offset = rPoints[9].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }
        var offset = new Vector(0, rPoints[2].position.y);
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
            // rPoints[i].position = rPoints[i].position.minus(new Vector(0, 0.1));
            rPoints[i].position = rPoints[i].position.plus(new Vector(0, 0.07068946809815344));
        }
        var offset = new Vector(0, -0.1);

        var mPoints = 
        [
            new Point(new Vector(-0.1, 0.07068946809815344)),//lt
            new Point(new Vector(-0.06, 0.07068946809815344)),//l_river
            new Point(new Vector(-0.055, 0.07)),//l_river_1
            new Point(new Vector(-0.05, 0.065)),//l_river_2
            new Point(new Vector(-0.0025, -0.0985)),
            new Point(new Vector(0, -0.1)),//bottom
            new Point(new Vector(0.0025, -0.0985)),
            new Point(new Vector(0.05, 0.065)),//l_river_2
            new Point(new Vector(0.055, 0.07)),//l_river_1
            new Point(new Vector(0.06, 0.07068946809815344)),//r_river
            new Point(new Vector(0.1, 0.07068946809815344)),//rt
            new Point(new Vector(0.1, -0.25)),//rb
            new Point(new Vector(-0.1, -0.25)),//lb
        ];

        var b = new Solid(
            new Vector(0,-0.07068946809815344),
            rPoints,
            [
                new Point(new Vector(-0.05, 0.07068946809815344)),//lt
                new Point(new Vector(0, -0.1)),
                new Point(new Vector(0.05, 0.07068946809815344)),//rt
                new Point(new Vector(0.1, -0.25)),//rb
                new Point(new Vector(-0.1, -0.25)),//lb

                
                new Point(new Vector(0.05, 0.0707)),
                new Point(new Vector(0.1, -0.25)),
                new Point(new Vector(0.1, 0.0707)),
                
                new Point(new Vector(-0.05, 0.0707)),
                new Point(new Vector(-0.1, -0.25)),
                new Point(new Vector(-0.1, 0.0707)),
                
                new Point(new Vector(-0.1,-0.25)),
                new Point(new Vector(-0.1,-0.6493)),
                new Point(new Vector(0.1,-0.6493)),
                new Point(new Vector(0.1,-0.25)),
                
                new Point(new Vector(-0.3,-0.6493)),
                new Point(new Vector(0.3,-0.8293)),
                new Point(new Vector(-0.3,-0.8293)),
                new Point(new Vector(0.3,-0.6493)),
            ],
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )




        b.collider = [
            0,4,1,
            3,1,4,
            1,3,2,
        
            5,6,7,
            8,10,9,
            11,12,13,
            11,13,14,
    
            15,17,16,
            15,16,18,
        ]

        return b;
    }
    static spawnHead_02(){
        
        var mPoints = 
        [
            new Point(new Vector(-0.1, 1)),
            new Point(new Vector(0.1, 1)),
            new Point(new Vector(0.005, 0.005)),
            new Point(new Vector(0, 0)),
            new Point(new Vector(-0.005, 0.005)),
        ];

        var rPoints = 
        [
            new Point(new Vector(3.826,0)),
            new Point(new Vector(3.826,4.361)),
            new Point(new Vector(2.565,4.361)),
            new Point(new Vector(2.565,5.366)),
            new Point(new Vector(1.961,7.62)),
            new Point(new Vector(1.984,7.627)),
            new Point(new Vector(1.777,8.401)),
            new Point(new Vector(1.766,8.415)),
            new Point(new Vector(1.749,8.419)),//8
            new Point(new Vector(1.739,8.415)),
            new Point(new Vector(1.733,8.409)),
            new Point(new Vector(1.729,8.398)),
            new Point(new Vector(1.522,7.627)),
            new Point(new Vector(1.753,6.764)),
            new Point(new Vector(1.753,5.75)),
            new Point(new Vector(1.469,4.97)),//15
            new Point(new Vector(1.469,4.394)),
            new Point(new Vector(1.501,4.361)),
            new Point(new Vector(0,4.361)),
            new Point(new Vector(0,0)),//19
        ];
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.2);
        }
        var offset = rPoints[8].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }

        var b = new Solid(
            new Vector(0,0.05),
            rPoints,
            [
                new Point(new Vector(-0.045, 0.16)),
                new Point(new Vector(0.045, 0.16)),
                new Point(new Vector(0, 0)),
            
                new Point(new Vector(-0.2, 0.81)),//5
                new Point(new Vector(0.0553, 0.81)),
                new Point(new Vector(-0.2, 1.81)),
                new Point(new Vector(0.0553, 1.81)),
                
                new Point(new Vector(-0.045, 0.16)),
                new Point(new Vector(0.045, 0.16)),
                new Point(new Vector(0, 0.33)),

                new Point(new Vector(-0.045, 0.16)),
                new Point(new Vector(0, 0.33)),
                new Point(new Vector(-0.163, 0.61)),

                new Point(new Vector(0, 0.33)),
                new Point(new Vector(0, 0.533)),
                new Point(new Vector(-0.163, 0.61)),

                new Point(new Vector(0.0553, 0.69)),
                new Point(new Vector(0, 0.533)),
                new Point(new Vector(-0.163, 0.61)),

                new Point(new Vector(0.0553, 0.69)),
                new Point(new Vector(0.0553, 0.81)),
                new Point(new Vector(-0.163, 0.61)),

                new Point(new Vector(-0.163, 0.81)),
                new Point(new Vector(0.0553, 0.81)),
                new Point(new Vector(-0.163, 0.61)),
            ],
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.needleIndex = 2;

        b.collider = [
            0,2,1,

            3,4,5,
            4,6,5,

            7,8,9,
            10,11,12,
            13,14,15,
            16,18,17,
            19,20,21,

            22,24,23
        ]

        return b;
    }
    
    static spawnFormedPlane(){
        
        var b = new Plane(
            new Vector(-1, 1.5),
            0,0
        );
        b.points = [
            new Point(new Vector(0.001258934597281991,2.0041416063850654)),
            new Point(new Vector(-0.004408668517312586, 1.0041576673765782)),
            new Point(new Vector(-0.010076271631907113, 0.004173728368091205)),
            new Point(new Vector(0.98990766737658, 0.009841331482685844)),
            new Point(new Vector(1.9898916063850671, 0.015508934597280533)),
        ];

        return b;
    }

    static spawnHead_03(){var mPoints = 
        [
            new Point(new Vector(-0.1, 1)),
            new Point(new Vector(0.1, 1)),
            new Point(new Vector(0.005, 0.005)),
            new Point(new Vector(0, 0)),
            new Point(new Vector(-0.005, 0.005)),
        ];

        var rPoints = 
        [
            new Point(new Vector(3.826,0)),
            new Point(new Vector(3.826,4.361)),
            new Point(new Vector(2.565,4.361)),
            new Point(new Vector(2.565,5.366)),
            new Point(new Vector(1.961,7.62)),
            new Point(new Vector(1.984,7.627)),
            new Point(new Vector(1.777,8.401)),
            new Point(new Vector(1.766,8.415)),
            new Point(new Vector(1.749,8.419)),//8
            new Point(new Vector(1.739,8.415)),
            new Point(new Vector(1.733,8.409)),
            new Point(new Vector(1.729,8.398)),
            new Point(new Vector(1.522,7.627)),
            new Point(new Vector(1.753,6.764)),
            new Point(new Vector(1.753,5.75)),
            new Point(new Vector(1.469,4.97)),//15
            new Point(new Vector(1.469,4.394)),
            new Point(new Vector(1.501,4.361)),
            new Point(new Vector(0,4.361)),
            new Point(new Vector(0,0)),//19
        ];
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.2);
        }
        var offset = rPoints[8].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }

        var cPoints = [
            new Point(new Vector(56.6,139.7)),
            new Point(new Vector(50.2,128.3)),
            new Point(new Vector(50,125.2)),
            new Point(new Vector(36.8,93.5)),
            new Point(new Vector(36.8,-40)),
            new Point(new Vector(49.7,-40)),
            new Point(new Vector(49.7,35.5)),
            new Point(new Vector(66.4,35.5)),
            new Point(new Vector(66.4,117.4)),
            new Point(new Vector(63.2,125.2)),
            new Point(new Vector(63,128.3)),//0 - 10
        ];
        
        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
            cPoints[i].position.y *= -1;
        }

        var b = new Solid(
            new Vector(0,0.05),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[0].position.x, -cPoints[0].position.y);

        b.needleIndex = 0;

        b.collider = [
            1,0,10,
            2,1,10,
            9,2,10,
            8,2,9,
            3,2,8,
            7,3,8,
            3,7,6,
            3,6,4,
            5,4,6

        ]

        return b;
    }

    
    static spawnAnvil_03(){

        var rPoints = 
        [
            // new Point(new Vector(0,2.892)),
            // new Point(new Vector(0,3.626)),
            // new Point(new Vector(4.6,3.672)),
            // new Point(new Vector(2.708,3.672)),
            // new Point(new Vector(2.754,3.626)),
            // new Point(new Vector(2.754,2.892)),
            // new Point(new Vector(2.708,2.846)),
            new Point(new Vector(1.928,2.846)),
            new Point(new Vector(1.928,0.023)),
            new Point(new Vector(1.905,0.000)),
            new Point(new Vector(1.705,0.000)),
            new Point(new Vector(1.684,0.003)),
            new Point(new Vector(1.662,0.015)),
            new Point(new Vector(1.647,0.032)),
            new Point(new Vector(1.636,0.062)),
            new Point(new Vector(1.423,0.857)),

            new Point(new Vector((1.423 + 1.331) / 2,0.857)),

            new Point(new Vector(1.331,0.857)),
            new Point(new Vector(1.118,0.061)),//11
            new Point(new Vector(1.113,0.043)),
            new Point(new Vector(1.102,0.026)),
            new Point(new Vector(1.089,0.013)),
            new Point(new Vector(1.074,0.005)),
            new Point(new Vector(1.049,0.000)),
            new Point(new Vector(0.849,0.000)),
            new Point(new Vector(0.826,0.023)),
            new Point(new Vector(0.826,2.846)),//19
        ];

        
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.2);
        }
        var offset = rPoints[9].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }
        var offset = new Vector(0, rPoints[2].position.y);
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
            // rPoints[i].position = rPoints[i].position.minus(new Vector(0, 0.1));
            rPoints[i].position = rPoints[i].position.plus(new Vector(0, 0.07068946809815344));
        }
        var offset = new Vector(0, -0.1);

        var mPoints = 
        [
            new Point(new Vector(-0.1, 0.07068946809815344)),//lt
            new Point(new Vector(-0.06, 0.07068946809815344)),//l_river
            new Point(new Vector(-0.055, 0.07)),//l_river_1
            new Point(new Vector(-0.05, 0.065)),//l_river_2
            new Point(new Vector(-0.0025, -0.0985)),
            new Point(new Vector(0, -0.1)),//bottom
            new Point(new Vector(0.0025, -0.0985)),
            new Point(new Vector(0.05, 0.065)),//l_river_2
            new Point(new Vector(0.055, 0.07)),//l_river_1
            new Point(new Vector(0.06, 0.07068946809815344)),//r_river
            new Point(new Vector(0.1, 0.07068946809815344)),//rt
            new Point(new Vector(0.1, -0.25)),//rb
            new Point(new Vector(-0.1, -0.25)),//lb
        ];
        var cPoints = [
            new Point(new Vector(64.7,70.9)),
            new Point(new Vector(59.9,67.7)),
            new Point(new Vector(54.6,54.9)),
            new Point(new Vector(54.6,48.9)),
            new Point(new Vector(44.6,25)),
            new Point(new Vector(25,25)),
            new Point(new Vector(25,84.2)),
            new Point(new Vector(34.8,84.4)),
            new Point(new Vector(34.9,140.1)),

            new Point(new Vector(94.2,140.1)),
            new Point(new Vector(94.1,84.4)),
            new Point(new Vector(103.8,84.2)),
            new Point(new Vector(103.9,25)),
            new Point(new Vector(84,25)),
            new Point(new Vector(74.3,48.9)),
            new Point(new Vector(74.3,54.9)),
            new Point(new Vector(69,67.7)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
            cPoints[i].position.y *= -1;
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[0].position.x, -cPoints[4].position.y);
        // b.offset(0 -cPoints[4].position.y);


        b.collider = [
            3,4,5,
            3,5,6,
            6,7,3,
            7,2,3,
            2,7,8,
            8,1,2,
            8,0,1,
            8,9,0,
            0,9,16,
            16,10,15,
            15,10,14,
            14,11,13,
            13,11,12,
            16,9,10,
            10,11,14,

        ]
        

        // b.position.x = 1;Ы
        // b.position.y = -1;

        return b;
    }

    static spawnHead_04(){var mPoints = 
        [
            new Point(new Vector(-0.1, 1)),
            new Point(new Vector(0.1, 1)),
            new Point(new Vector(0.005, 0.005)),
            new Point(new Vector(0, 0)),
            new Point(new Vector(-0.005, 0.005)),
        ];

        var rPoints = 
        [
            new Point(new Vector(3.826,0)),
            new Point(new Vector(3.826,4.361)),
            new Point(new Vector(2.565,4.361)),
            new Point(new Vector(2.565,5.366)),
            new Point(new Vector(1.961,7.62)),
            new Point(new Vector(1.984,7.627)),
            new Point(new Vector(1.777,8.401)),
            new Point(new Vector(1.766,8.415)),
            new Point(new Vector(1.749,8.419)),//8
            new Point(new Vector(1.739,8.415)),
            new Point(new Vector(1.733,8.409)),
            new Point(new Vector(1.729,8.398)),
            new Point(new Vector(1.522,7.627)),
            new Point(new Vector(1.753,6.764)),
            new Point(new Vector(1.753,5.75)),
            new Point(new Vector(1.469,4.97)),//15
            new Point(new Vector(1.469,4.394)),
            new Point(new Vector(1.501,4.361)),
            new Point(new Vector(0,4.361)),
            new Point(new Vector(0,0)),//19
        ];
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.2);
        }
        var offset = rPoints[8].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }

        var cPoints = [
            new Point(new Vector(24.2,150.8)),
            new Point(new Vector(21.2,140.5)),
            new Point(new Vector(21.2,69)),
            new Point(new Vector(17.2,62.5)),
            new Point(new Vector(17.2,35.5)),
            new Point(new Vector(31.2,35.5)),
            new Point(new Vector(31.2,-10)),
            new Point(new Vector(44.2,-10)),
            new Point(new Vector(44.2,49.5)),
            new Point(new Vector(27.2,69)),
            new Point(new Vector(27.2,140.5)),//0 -- 10
        ];
        
        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
            cPoints[i].position.y *= -1;
        }

        var b = new Solid(
            new Vector(0,0.05),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[0].position.x, -cPoints[0].position.y);

        b.needleIndex = 0;

        b.collider = [
            0,10,1,
            1,10,9,
            1,9,2,
            2,9,3,
            3,9,8,
            3,8,4,
            4,8,5,
            5,8,7,
            7,6,5
        ]

        return b;
    }

    
    static spawnAnvil_04(){

        var rPoints = 
        [
            // new Point(new Vector(0,2.892)),
            // new Point(new Vector(0,3.626)),
            // new Point(new Vector(4.6,3.672)),
            // new Point(new Vector(2.708,3.672)),
            // new Point(new Vector(2.754,3.626)),
            // new Point(new Vector(2.754,2.892)),
            // new Point(new Vector(2.708,2.846)),
            new Point(new Vector(1.928,2.846)),
            new Point(new Vector(1.928,0.023)),
            new Point(new Vector(1.905,0.000)),
            new Point(new Vector(1.705,0.000)),
            new Point(new Vector(1.684,0.003)),
            new Point(new Vector(1.662,0.015)),
            new Point(new Vector(1.647,0.032)),
            new Point(new Vector(1.636,0.062)),
            new Point(new Vector(1.423,0.857)),

            new Point(new Vector((1.423 + 1.331) / 2,0.857)),

            new Point(new Vector(1.331,0.857)),
            new Point(new Vector(1.118,0.061)),//11
            new Point(new Vector(1.113,0.043)),
            new Point(new Vector(1.102,0.026)),
            new Point(new Vector(1.089,0.013)),
            new Point(new Vector(1.074,0.005)),
            new Point(new Vector(1.049,0.000)),
            new Point(new Vector(0.849,0.000)),
            new Point(new Vector(0.826,0.023)),
            new Point(new Vector(0.826,2.846)),//19
        ];

        
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position.rotateAroundPoint(new Vector(0,0), 180);
            rPoints[i].position = rPoints[i].position.multiply(0.2);
        }
        var offset = rPoints[9].position;
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
        }
        var offset = new Vector(0, rPoints[2].position.y);
        for(let i = 0;i < rPoints.length;i++){
            rPoints[i].position = rPoints[i].position.minus(offset);
            // rPoints[i].position = rPoints[i].position.minus(new Vector(0, 0.1));
            rPoints[i].position = rPoints[i].position.plus(new Vector(0, 0.07068946809815344));
        }
        var offset = new Vector(0, -0.1);

        var mPoints = 
        [
            new Point(new Vector(-0.1, 0.07068946809815344)),//lt
            new Point(new Vector(-0.06, 0.07068946809815344)),//l_river
            new Point(new Vector(-0.055, 0.07)),//l_river_1
            new Point(new Vector(-0.05, 0.065)),//l_river_2
            new Point(new Vector(-0.0025, -0.0985)),
            new Point(new Vector(0, -0.1)),//bottom
            new Point(new Vector(0.0025, -0.0985)),
            new Point(new Vector(0.05, 0.065)),//l_river_2
            new Point(new Vector(0.055, 0.07)),//l_river_1
            new Point(new Vector(0.06, 0.07068946809815344)),//r_river
            new Point(new Vector(0.1, 0.07068946809815344)),//rt
            new Point(new Vector(0.1, -0.25)),//rb
            new Point(new Vector(-0.1, -0.25)),//lb
        ];
        var cPoints = [
            new Point(new Vector(0,-10)),
            new Point(new Vector(3.75,0)),
            new Point(new Vector(30,0)),
            new Point(new Vector(30,-26.25)),
            new Point(new Vector(20,-30)),
            new Point(new Vector(30,-33.75)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-33.75)),
            new Point(new Vector(-20,-30)),
            new Point(new Vector(-30,-26.75)),
            new Point(new Vector(-30,0)),
            new Point(new Vector(-3.75,0)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
            // cPoints[i].position.y *= -1;
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[0].position.x, -cPoints[1].position.y);
        // b.offset(0 -cPoints[4].position.y);


        b.collider = [
            0,2,1,
            2,0,3,
            0,4,3,
            0,9,4,
            4,6,5,
            4,9,6,
            9,7,6,
            7,9,8,
            9,0,10,
            10,0,11,
            11,0,12
        ]
        

        // b.position.x = 1;Ы
        // b.position.y = -1;

        return b;
    }

    

    static spawnHead_05(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(27.2,150.8)),
            new Point(new Vector(21.2,148)),
            new Point(new Vector(21.2,69)),
            new Point(new Vector(17.2,62.5)),
            new Point(new Vector(17.2,35.5)),
            new Point(new Vector(20.2,35.5)),
            new Point(new Vector(20.2,4)),
            new Point(new Vector(44.2,4)),
            new Point(new Vector(44.2,49.5)),
            new Point(new Vector(27.2,69)),
            new Point(new Vector(27.2,140.5)),//0 -- 10
            new Point(new Vector(17.2,163.8)),
            new Point(new Vector(13.2,158.5)),
            // new Point(new Vector(24.2,150.8)),
        ];
        
        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
            cPoints[i].position.y *= -1;
        }

        var b = new Solid(
            new Vector(0,0.15),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[11].position.x, -cPoints[11].position.y);

        b.needleIndex = 11;

        b.collider = [
            0,10,1,
            1,10,9,
            1,9,2,
            2,9,3,
            3,9,8,
            3,8,4,
            4,8,5,
            5,8,7,
            7,6,5,
            11,0,12,
            12,0,1,
        ]

        return b;
    }

    
    static spawnAnvil_05(){

        var rPoints = [];
        var offset = new Vector(0, -0.1);

        var cPoints = [
            new Point(new Vector(0,-15)),
            // new Point(new Vector(3,-12)),
            new Point(new Vector(12.5,0)),
            new Point(new Vector(30,0)),
            new Point(new Vector(30,-26.25)),
            new Point(new Vector(20,-30)),
            new Point(new Vector(30,-33.75)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-33.75)),
            new Point(new Vector(-20,-30)),
            new Point(new Vector(-30,-26.75)),
            new Point(new Vector(-30,0)),
            new Point(new Vector(-12.5,0)),
            new Point(new Vector(-5,-12)),
            new Point(new Vector(5,-12)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
            // cPoints[i].position.y *= -1;
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[0].position.x, -cPoints[1].position.y);
        // b.offset(0 -cPoints[4].position.y);


        b.collider = [
            14,2,1,
            2,0,3,
            0,4,3,
            0,9,4,
            4,6,5,
            4,9,6,
            9,7,6,
            7,9,8,
            9,0,10,
            10,0,11,
            11,13,12,
            11,0,13,
            0,2,14,
        ]
        

        // b.position.x = 1;Ы
        // b.position.y = -1;

        return b;
    }

    static spawnHead_06(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(0,0)),
            new Point(new Vector(6,20.5)),
            new Point(new Vector(5,21.5)),
            new Point(new Vector(20,76)),
            new Point(new Vector(20,105)),
            new Point(new Vector(17,105)),
            new Point(new Vector(17,113)),
            new Point(new Vector(20,113)),
            new Point(new Vector(20,170)),
            new Point(new Vector(7,170)),
            new Point(new Vector(7,100)),
            new Point(new Vector(-7,100)),
            new Point(new Vector(-7,85)),
            new Point(new Vector(0,66)),
            new Point(new Vector(0,41)),
            new Point(new Vector(-6,20.5)),
        ];
        
        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0.05),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        b.offset(-cPoints[0].position.x, -cPoints[0].position.y);
        b.needleIndex = 0;

        b.collider = [
            0,1,15,
            1,2,15,
            2,15,14,
            2,14,3,
            3,14,13,
            3,13,12,
            3,12,11,
            3,11,10,
            3,10,4,
            10,5,4,
            10,5,6,
            10,6,9,
            9,6,8,
            6,8,7
        ]

        return b;
    }

    
    static spawnAnvil_06(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(0,-10)),
            new Point(new Vector(3,0)),
            new Point(new Vector(7,0)),
            new Point(new Vector(7,-62)),
            new Point(new Vector(30,-62)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-62)),
            new Point(new Vector(-7,-62)),
            new Point(new Vector(-7,0)),
            new Point(new Vector(-3,0)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        
        b.collider = [
            0,1,2,
            0,2,3,
            3,4,5,
            3,5,6,
            6,7,8,
            6,8,3,
            8,3,0,
            8,9,0,
            9,10,0,
        ]
        
        return b;
    }

    
    static spawnAnvil_07(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(1,-11.2)),
            new Point(new Vector(4,0)),
            new Point(new Vector(9,0)),
            new Point(new Vector(9,-62)),
            new Point(new Vector(30,-62)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-62)),
            new Point(new Vector(-9,-62)),
            new Point(new Vector(-9,0)),
            new Point(new Vector(-4,0)),
            new Point(new Vector(-1,-11.2)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        
        b.collider = [
            0,1,2,
            0,2,3,
            3,4,5,
            3,5,6,
            6,7,8,
            6,8,3,
            8,3,0,
            8,11,0,
            8,9,10,
            8,10,11,
        ]
        
        return b;
    }

    static spawnAnvil_08(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(1,-18.6)),
            new Point(new Vector(6,0)),
            new Point(new Vector(12,0)),
            new Point(new Vector(12,-62)),
            new Point(new Vector(30,-62)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-62)),
            new Point(new Vector(-12,-62)),
            new Point(new Vector(-12,0)),
            new Point(new Vector(-6,0)),
            new Point(new Vector(-1,-18.6)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        
        b.collider = [
            0,1,2,
            0,2,3,
            3,4,5,
            3,5,6,
            6,7,8,
            6,8,3,
            8,3,0,
            8,11,0,
            8,9,10,
            8,10,11,
        ]
        
        return b;
    }

    static spawnAnvil_11(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(2.5,-20.3)),
            new Point(new Vector(8,0)),
            new Point(new Vector(15,0)),
            new Point(new Vector(15,-62)),
            new Point(new Vector(30,-62)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-62)),
            new Point(new Vector(-15,-62)),
            new Point(new Vector(-15,0)),
            new Point(new Vector(-8,0)),
            new Point(new Vector(-2.5,-20.3)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        
        b.collider = [
            0,1,2,
            0,2,3,
            3,4,5,
            3,5,6,
            6,7,8,
            6,8,3,
            8,3,0,
            8,11,0,
            8,9,10,
            8,10,11,
        ]
        
        return b;
    }

    static spawnAnvil_09(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(2.5,-27.9)),
            new Point(new Vector(10,0)),
            new Point(new Vector(17.5,0)),
            new Point(new Vector(17.5,-62)),
            new Point(new Vector(30,-62)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-62)),
            new Point(new Vector(-17.5,-62)),
            new Point(new Vector(-17.5,0)),
            new Point(new Vector(-10,0)),
            new Point(new Vector(-2.5,-27.9)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        
        b.collider = [
            0,1,2,
            0,2,3,
            3,4,5,
            3,5,6,
            6,7,8,
            6,8,3,
            8,3,0,
            8,11,0,
            8,9,10,
            8,10,11,
        ]
        
        return b;
    }
    
    static spawnAnvil_10(){

        var rPoints = [];

        var cPoints = [
            new Point(new Vector(2.5,-37.25)),
            new Point(new Vector(12.5,0)),
            new Point(new Vector(20,0)),
            new Point(new Vector(20,-62)),
            new Point(new Vector(30,-62)),
            new Point(new Vector(30,-100)),
            new Point(new Vector(-30,-100)),
            new Point(new Vector(-30,-62)),
            new Point(new Vector(-20,-62)),
            new Point(new Vector(-20,0)),
            new Point(new Vector(-12.5,0)),
            new Point(new Vector(-2.5,-37.25)),
        ];

        for(let i = 0;i < cPoints.length;i++){
            cPoints[i].position = cPoints[i].position.multiply(0.01);
        }

        var b = new Solid(
            new Vector(0,0),
            rPoints,
            cPoints,
            ColorTheme[settings.theme].color.pressPoint,
            ColorTheme[settings.theme].color.press,
            0.025
        )

        
        b.collider = [
            0,1,2,
            0,2,3,
            3,4,5,
            3,5,6,
            6,7,8,
            6,8,3,
            8,3,0,
            8,11,0,
            8,9,10,
            8,10,11,
        ]
        
        return b;
    }
}

