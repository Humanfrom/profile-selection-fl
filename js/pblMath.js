const pblMath = {
    acos(x){
        if(Math.abs(x) > 1){
            x = 1 * (x < 0) ? -1 : 1;
        }
        return Math.acos(x);
    }
}