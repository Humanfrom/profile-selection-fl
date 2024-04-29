
export class Vector{
    x = 0;
    y = 0;
    constructor(x = 0,y = 0){
        this.x = x;
        this.y = y;
    }

    // Поворачиваем точку на угол (deg) относительно точки t0(x,y)
    rotateAroundPoint(t0, deg) {
    
        var t_new = {};
    
        // Переводим угол поворота из градусов в радианы
        var rad = (Math.PI / 180) * deg;
    
        // И рассчитываем координаты новой точки по формуле
        t_new.x = t0.x + (this.x - t0.x) * Math.cos(rad) - (this.y - t0.y) * Math.sin(rad);
        t_new.y = t0.y + (this.x - t0.x) * Math.sin(rad) + (this.y - t0.y) * Math.cos(rad);
    
        // Возвращаем полученное значение
        this.x = t_new.x;
        this.y = t_new.y;
    }

    length(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    static length(p1, p2){
        var v = p1.minus(p2);
        return Math.sqrt((v.x * v.x) + (v.y * v.y));
    }
    lengthSqr(){
        return ((this.x * this.x) + (this.y * this.y));
    }
    normalize(){
        let l = this.length();
        this.x /= l;
        this.y /= l;
    }

    minus(v){
        return new Vector(this.x - v.x, this.y - v.y);
    }
    plus(v){
        return new Vector(this.x + v.x, this.y + v.y);
    }
    multiply(t){
        return new Vector(this.x * t, this.y * t);
    }
    static VectorTo(v1,v2){
        var v = new Vector(v1.x - v2.x, v1.y - v2.y);
        v.normalize();
        return v;
    }
    static dot(v1,v2){
        return (v1.x * v2.x) + (v1.y * v2.y);
    }
    static angle(v1,v2, min = false){
        let d = Vector.dot(v1,v2);
        d = (d / v1.length()) / v2.length();
        d = pblMath.acos(d);
        v1 = new Vector(
            v1.y,
            v1.x * -1
        );

        if(min){
            var ret = d * 180/Math.PI;
            return isNaN(ret) ? 0 : ret;
        }

        
        let d2 = Vector.dot(v1,v2);
        d2 = (d2 / v1.length()) / v2.length();
        d2 = pblMath.acos(d2);
        
        if(d2 > d){
            d *= -1
        }

        var ret = d * 180/Math.PI;
        return isNaN(ret) ? 0 : ret;
    }
    rotQuart(b = true){
        var x = this.y;
        var y = this.x * -1;
        this.x = x;
        this.y = y;
    }

    toString(){
        return `x: ${this.x.toFixed(4)}; y: ${this.y.toFixed(4)}`;
    }

    static cross(a1, a2, b1, b2) {

        let n;
        if (a2.y - a1.y != 0) {  // a(y)
            let q = (a2.x - a1.x) / (a1.y - a2.y);   
            let sn = (b1.x - b2.x) + (b1.y - b2.y) * q; if (!sn) { return 0; }  // c(x) + c(y)*q
            let fn = (b1.x - a1.x) + (b1.y - a1.y) * q;   // b(x) + b(y)*q
            n = fn / sn;
        }
        else {
            if (!(b1.y - b2.y)) { return null; }  // b(y)
            n = (b1.y - a1.y) / (b1.y - b2.y);   // c(y)/b(y)
        }
        // dot[0] = b1.x + (b2.x - b1.x) * n;  // b1.x + (-b(x))*n
        // dot[1] = b1.y + (b2.y - b1.y) * n;  // b1.y +(-b(y))*n


        var p = new Vector(
            b1.x + (b2.x - b1.x) * n,
            b1.y + (b2.y - b1.y) * n
        );

        var AA = a1.minus(a2).length();
        var A1P = a1.minus(p).length();
        var A2P = a2.minus(p).length();

        var BB = b1.minus(b2).length();
        var B1P = b1.minus(p).length();
        var B2P = b2.minus(p).length();

        
        
        if(
            (A1P <= AA && A2P <= AA) &&
            (B1P <= BB && B2P <= BB)
        ){
            return p;
        }else{
            return null;
        }
        
        // document.getElementById("debug").innerHTML = `${p}`;

        return p;
    }
}

export class Point{
    constructor(position = new Vector(0,0), color = "red", radius = 0.025){
        this.position = position;
        this.color = color;
        this.radius = radius;
    }
    draw(offset = new Vector(), controller){
        controller.ctx.beginPath();
        controller.ctx.fillStyle = this.color;
        // controller.ctx.arc((this.position.x + offset.x) * controller.unit, (this.position.y + offset.y) * controller.unit, this.radius * controller.unit, 0, Math.PI * 2, true); // Outer circle
        controller.ctx.arc((this.position.x + offset.x) * controller.unit, (this.position.y + offset.y) * controller.unit, 3, 0, Math.PI * 2, true); // Outer circle
        controller.ctx.fill();

        
    }
}

export class Plane{
    constructor(position = new Vector(), length = 2, points = 2, rotation = 0, pColor = "white", lColor = "red", pR = 0.025, lS = 1){
        this.position = position;
        this.points = [];
        this.collisionPoints = [];
        this.pColor = pColor;
        this.lColor = lColor;
        this.pRadius = pR;
        this.lSize = lS;
        for(let i = 0;i < points;i++){
            var l = length / (points - 1);
            var s = length / -2;
            this.points.push(new Point(new Vector(s + l * i, 0), ColorTheme[settings.theme].color.planePoint));

            this.collisionPoints.push(new Point(new Vector(s + l * i, 0), ColorTheme[settings.theme].color.planePoint));
        }
        this.collisionPoints = this.points;
    }

    updateCollision(){
        for(let i = 0;i < this.points;i++){

            this.collisionPoints.push(new Point(new Vector(this.points[i].position.x, this.points[i].position.y)));
        }
    }

    offset(x,y){
        for(let i = 0;i < this.points.length;i++){
            this.points[i].position = this.points[i].position.plus(new Vector(x,y));
        }
        // this.points.forEach(p => {
        //     p.position.x += x;
        //     p.position.y += y;
        // });
    }

    reverse(){
        // var oldPoints = this.points;
        for(let i = 0;i < Math.floor(this.points.length / 2);i++){
            var p = this.points[i];
            this.points[i] = this.points[this.points.length - 1 - i];
            this.points[this.points.length - 1 - i] = p;
            // this.points[i] = oldPoints[this.points.length - 1 - i];
            // this.points[i].position.x *= -1;
        }
    }

    addPointAfter(leftPoint, distance){
        // if(leftPoint == this.points.length - 1){
        //     return false;
        // }


        var dir = this.points[leftPoint].position.minus(this.points[leftPoint + 1].position);
        dir.normalize();
        dir = dir.multiply(distance);
        var position = new Vector(
            this.points[leftPoint].position.x - dir.x,
            this.points[leftPoint].position.y - dir.y
        )

        // position.y *= -1;

        this.points.splice(leftPoint + 1, 0, new Point(position));
        this.updateCollision();
        return true;
    }

    draw(controller){
        controller.ctx.lineWidth = 1;
        controller.ctx.fillStyle = "red";
        controller.ctx.fillRect(this.position.x * controller.unit - 5,this.position.y * controller.unit - 5, 10, 10);

        controller.ctx.beginPath();

        controller.ctx.lineWidth = 10;

        controller.ctx.moveTo(
            (this.points[0].position.x + this.position.x) * controller.unit,
            (this.points[0].position.y + this.position.y) * controller.unit,
        )
        controller.ctx.lineWidth = ((this.lSize || 1) * controller.unit / 100) < 1 ? 1 : (this.lSize || 1) * controller.unit / 100;
        controller.ctx.lineWidth = settings.preview.lineWidth;
        controller.ctx.strokeStyle = this.lColor;
        this.points.forEach(p => {
            controller.ctx.lineTo((p.position.x + this.position.x) * controller.unit,(p.position.y + this.position.y) * controller.unit);
        });

        controller.ctx.stroke();
        let i = 0;
        this.points.forEach(p => {
            p.color = this.pColor;
            p.radius = this.pRadius;
            p.draw(this.position, controller);
            controller.ctx.font = "48px serif";
            // controller.ctx.fillText(i, (this.position.x + p.position.x) * controller.unit, (this.position.y + p.position.y + 0.1) * controller.unit);
            i++;
        });
    }
    
    rotateAroundPoint(t0, deg){
        if(deg == 0){
            return;
        }
        t0 = {
            x: t0.x - this.position.x,
            y: t0.y - this.position.y,
        }
        for(let i = 0;i < this.points.length;i++){
            this.points[i].position.rotateAroundPoint(t0, deg);
            // e.position.rotateAroundPoint(t0,deg);
        }

        this.updateCollision();
        // this.collider.forEach(e => {
        //     e.position.rotateAroundPoint(t0,deg);
        // });
    }

    isColliding(sol){
        for(let i = 0;i < this.points.length;i++){
            if(sol.isInside(this.points[i].position.plus(this.position))){
                return i;
            }
        }
        for(let i = 0;i < this.points[i].length - 1;i++){
            if(sol.lineCross(this.points[i].position.plus(this.position),this.points[i + 1].position.plus(this.position)) != null) return i;
        }

        return -1;
    }

    CollidingArray(sol){
        var b = []
        for(let i = 0;i < this.points.length;i++){
            if(sol.isInside(this.points[i].position.plus(this.position))){
                b.push(i);
            }
        }

        return b;
    }

    
    findNearestPoints(pos, count = 1){
        var p = [];

        var ns = [];

        for(let i = 0;i < this.points.length;i++){
            var n = {
                n:i,
                l:this.points[i].position.plus(this.position).minus(pos).length()
            };

            
            if(p.length == 0){
                p.push(n);
            }else{
                var b = true;
                for(let j = 0;j < p.length;j++){
                    if(n.l < p[j].l){
                        p.splice(j,0,n);
                        b= false;
                        break;
                    }
                }
                if(b){
                    p.push(n);
                }
            }
        }

        // p.sort((a,b)=>{return a.length < b.length ? -1 : 1})

        var ret = [];
        for(let i = 0;i < count;i++){
            ret.push(p[i].n);
        }
        return ret;
    }

    
    findNearestSurfaceFromArray(points, offset = new Vector()){
        var p = [];
        points.forEach(e => {
            p.push(this.findNearestSurface(e.position.plus(offset)));
        });

        p.sort((a,b) => {return a.distance - b.distance});

        return p;
    }

    findNearestSurface(pos){
        
        // var points = this.findNearestPoints(pos,2);
        var points = [];
        for(let i = 0;i < this.points.length - 1;i++){
            points.push(calcForTwos([i, i + 1], this));
        }

        points.sort((a,b)=>{return a.distance - b.distance;});

        return points[0];
        ///
        function calcForTwos(points, body){
            var pos1 = body.position.plus(body.points[points[0]].position);
            var pos2 = body.position.plus(body.points[points[1]].position);

            var AP = pos1.minus(pos);
            var AB = pos1.minus(pos2);

            var magAB = pos1.minus(pos2).lengthSqr();
            var dot = Vector.dot(AP, AB);
            var distance = dot / magAB;


            if (distance < 0){
                return {
                    searchPoint:pos,
                    points: points,
                    surface: pos1,
                    distance: pos.minus(pos1).length(),
                };
            } else if (distance > 1){
                return {
                    searchPoint:pos,
                    points: points,
                    surface: pos2,
                    distance: pos.minus(pos2).length(),
                };
            } else {
                return {
                    searchPoint:pos,
                    points: points,
                    surface: pos1.minus(AB.multiply(distance)),
                    distance: pos.minus(pos1.minus(AB.multiply(distance))).length(),
                };
            }
        }
    }
}

export class Solid{
    constructor(position = new Vector(0,0), points = [], collisionPoints = null, pColor = "white", lColor = "red", pR = 0.1, lS = 1){
        this.position = position;
        this.points = points;
        this.pColor = pColor;
        this.lColor = lColor;
        this.pRadius = pR;
        this.lSize = lS;
        if(collisionPoints == null){
            this.collisionPoints = points;
        }else{
            this.collisionPoints = collisionPoints;
        }
    }

    collider = [];

    
    offset(x,y){
        this.points.forEach(p => {
            p.position.x += x;
            p.position.y += y;
        });
        this.collisionPoints.forEach(p => {
            p.position.x += x;
            p.position.y += y;
        });
    }

    rotateAroundPoint(t0, deg){
        t0 = {
            x: t0.x - this.position.x,
            y: t0.y - this.position.y,
        }
        this.points.forEach(e => {
            e.position.rotateAroundPoint(t0,deg);
        });
        this.collisionPoints.forEach(e => {
            e.position.rotateAroundPoint(t0,deg);
        });
        // this.collider.forEach(e => {
        //     e.position.rotateAroundPoint(t0,deg);
        // });
    }

    

    
    findNearestPoints(pos, count = 1){
        var p = [];

        var ns = [];

        for(let i = 0;i < this.collisionPoints.length;i++){
            var n = {
                n:i,
                l:this.collisionPoints[i].position.plus(this.position).minus(pos).length()
            };

            
            if(p.length == 0){
                p.push(n);
            }else{
                var b = true;
                for(let j = 0;j < p.length;j++){
                    if(n.l < p[j].l){
                        p.splice(j,0,n);
                        b= false;
                        break;
                    }
                }
                if(b)
                    p.push(n);
            }
        }

        var ret = [];
        for(let i = 0;i < count;i++){
            ret.push(p[i].n);
        }
        return ret;
    }

    
    findNearestSurfaceFromArray(points, offset = new Vector()){
        var p = [];
        points.forEach(e => {
            p.push(this.findNearestSurface(e.position.plus(offset)));
        });

        p.sort((a,b) => {return a.distance - b.distance});

        return p;
    }

    findNearestSurface(pos){
        
        // var points = this.findNearestPoints(pos,2);
        var points = [];
        for(let i = 0;i < this.collisionPoints.length - 1;i++){
            points.push(calcForTwos([i, i + 1], this));
        }

        points.sort((a,b)=>{return a.distance - b.distance;});

        return points[0];
        ///
        function calcForTwos(points, body){
            var pos1 = body.position.plus(body.collisionPoints[points[0]].position);
            var pos2 = body.position.plus(body.collisionPoints[points[1]].position);

            var AP = pos1.minus(pos);
            var AB = pos1.minus(pos2);

            var magAB = pos1.minus(pos2).lengthSqr();
            var dot = Vector.dot(AP, AB);
            var distance = dot / magAB;


            if (distance < 0){
                return {
                    searchPoint:pos,
                    points: points,
                    surface: pos1,
                    distance: pos.minus(pos1).length(),
                };
            } else if (distance > 1){
                return {
                    searchPoint:pos,
                    points: points,
                    surface: pos2,
                    distance: pos.minus(pos2).length(),
                };
            } else {
                return {
                    searchPoint:pos,
                    points: points,
                    surface: pos1.minus(AB.multiply(distance)),
                    distance: pos.minus(pos1.minus(AB.multiply(distance))).length(),
                };
            }
        }
    }

    isInside(pos){
        pos = pos.minus(this.position);

        for(let i = 0;i < this.collider.length;i+= 3){
            var dir1 = Vector.VectorTo(this.collisionPoints[this.collider[i]].position,this.collisionPoints[this.collider[i + 1]].position);
            var dir2 = Vector.VectorTo(this.collisionPoints[this.collider[i + 1]].position,this.collisionPoints[this.collider[i + 2]].position);
            var dir3 = Vector.VectorTo(this.collisionPoints[this.collider[i + 2]].position,this.collisionPoints[this.collider[i]].position);
            dir1.rotQuart();
            dir2.rotQuart();
            dir3.rotQuart();

            var dir1d = Vector.VectorTo(this.collisionPoints[this.collider[i]].position,pos);
            var dir2d = Vector.VectorTo(this.collisionPoints[this.collider[i + 1]].position,pos);
            var dir3d = Vector.VectorTo(this.collisionPoints[this.collider[i + 2]].position,pos);

            
            if(Vector.dot( dir1, dir1d) < 0
            && Vector.dot( dir2, dir2d) < 0
            && Vector.dot( dir3, dir3d) < 0){
                // var h = document.getElementById("debug");
                // h.innerHTML = `true<br>${i / 3}`;
                return true;
            }
        }

        // var h = document.getElementById("debug");
        // h.innerHTML = "false";

        return false;
    }

    static isColliding(b1, b2){
        if(b2.isInside){
            for(let i = 0;i < b1.collisionPoints.length;i++){
                if(b2.isInside(b1.collisionPoints[i].position.plus(b1.position))){
                    return true;
                }
            }
        }
        if(b1.isInside){
            for(let i = 0;i < b2.collisionPoints.length;i++){
                if(b1.isInside(b2.collisionPoints[i].position.plus(b2.position))){
                    return true;
                }
            }
    
        }
        return false;
    }

    lineCross(p1, p2){
        // if(this.isInside(p1) || this.isInside(p2)){
        //     return null;
        // }
        var p = [];
        // this.collisionPoints.length
        for(let j = 0;j < this.collider.length;j+=3){
            for(let i = 0;i < 3;i++){
                var _p1 = i + j;
                var _p2 = j + (i == 2 ? 0 : i + 1)
                var b = Vector.cross(
                    this.collisionPoints[this.collider[_p1]].position.plus(this.position),
                    this.collisionPoints[this.collider[_p2]].position.plus(this.position),
    
                    p1,p2
                )
    
                if(b != null){
                    p.push(b);
                }
            }
        }
        if(p.length == 0)
            return null;

        p.sort((a,b)=>{
            return (
                p1.minus(a).lengthSqr() < p1.minus(b).lengthSqr()
            ) ? 1 : -1;
        })

        return p[0];
        
    }

    // lineCross(plane){
    //     var ret = null;
    //     for(var i = 0;i < plane.)
    // }

    draw(controller) {
        //lines
        controller.ctx.lineWidth = this.lSize;

        controller.ctx.lineWidth = this.lSize;
        controller.ctx.strokeStyle = this.lColor;
        controller.ctx.fillStyle = this.lColor;

        if(controller.cons.debugs.drawCollider){
            for(let i = 0;i < this.collider.length;i+= 3){
                controller.ctx.beginPath();

                controller.ctx.moveTo(
                    (this.collisionPoints[this.collider[i]].position.x + this.position.x) * controller.unit,
                    (this.collisionPoints[this.collider[i]].position.y + this.position.y) * controller.unit,
                )
                controller.ctx.lineTo((this.collisionPoints[this.collider[i + 1]].position.x + this.position.x) * controller.unit,(this.collisionPoints[this.collider[i + 1]].position.y + this.position.y) * controller.unit);
                controller.ctx.lineTo((this.collisionPoints[this.collider[i + 2]].position.x + this.position.x) * controller.unit,(this.collisionPoints[this.collider[i + 2]].position.y + this.position.y) * controller.unit);
                controller.ctx.lineTo((this.collisionPoints[this.collider[i]].position.x + this.position.x) * controller.unit,(this.collisionPoints[this.collider[i]].position.y + this.position.y) * controller.unit);

                controller.ctx.stroke();
            }
            
        }else{
            for(let i = 0;i < this.collider.length;i+= 3){
                controller.ctx.beginPath();

                controller.ctx.moveTo(
                    (this.collisionPoints[this.collider[i]].position.x + this.position.x) * controller.unit,
                    (this.collisionPoints[this.collider[i]].position.y + this.position.y) * controller.unit,
                )
                controller.ctx.lineTo((this.collisionPoints[this.collider[i + 1]].position.x + this.position.x) * controller.unit,(this.collisionPoints[this.collider[i + 1]].position.y + this.position.y) * controller.unit);
                controller.ctx.lineTo((this.collisionPoints[this.collider[i + 2]].position.x + this.position.x) * controller.unit,(this.collisionPoints[this.collider[i + 2]].position.y + this.position.y) * controller.unit);
                controller.ctx.lineTo((this.collisionPoints[this.collider[i]].position.x + this.position.x) * controller.unit,(this.collisionPoints[this.collider[i]].position.y + this.position.y) * controller.unit);

                controller.ctx.fill();
                controller.ctx.stroke();
            }
            // if(this.points.length != 0){
            //     controller.ctx.beginPath();
            //     controller.ctx.moveTo(
            //         (this.points[this.points.length - 1].position.x + this.position.x) * controller.unit,
            //         (this.points[this.points.length - 1].position.y + this.position.y) * controller.unit,
            //     )
            //     controller.ctx.strokeStyle = this.lColor;
            //     this.points.forEach(p => {
            //         controller.ctx.lineTo((p.position.x + this.position.x) * controller.unit,(p.position.y + this.position.y) * controller.unit);
            //     });
                
            //     if(ColorTheme[settings.theme].fill.press){
            //         controller.ctx.fill();
            //     }else{
            //         controller.ctx.stroke();
            //     }
            // }
        }

        //dots
        
        if(controller.cons.debugs.drawPoints == false){
            return;
        }
        var i = 0;
        this.collisionPoints.forEach(p => {
            p.color = this.pColor;
            p.radius = this.pRadius;
            p.draw(this.position, controller);

            controller.ctx.fillText(i, (p.position.x + this.position.x) * controller.unit, (p.position.y + this.position.y) * controller.unit);
            i++;
        });
        // controller.ctx.fill();
    }
}