const getSessionId = (e,t)=>{
    let o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , a = [];
    if (t = t || o.length,
    e)
        for (let r = 0; r < e; r++)
            a[r] = o[0 | Math.random() * t];
    else {
        let e;
        a[8] = a[13] = a[18] = a[23] = "-",
        a[14] = "4";
        for (let t = 0; t < 36; t++)
            a[t] || (e = 0 | 16 * Math.random(),
            a[t] = o[19 == t ? 3 & e | 8 : e])
    }
    return a.join("");
}
(8, 16);

module.exports = getSessionId