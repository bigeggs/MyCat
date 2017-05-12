export function saveToLocal(id, key, val) {
    let seller = window.localStorage._seller_;
    if (!seller) {
        //不存在seller时补上
        seller = {};
        seller[id] = {};
    } else {
        //seller被存为字符串，需要转为json对象
        seller = JSON.parse(seller);
        //不存在seller.id时补上
        if (!seller[id]) {
            seller[id] = {};
        }
    }
    seller[id][key] = val; //写值
    window.localStorage._seller_ = JSON.stringify(seller); //转回字符串存储
}

export function loadFromLocal(id, key, def) {
    let seller = window.localStorage._seller_;
    if (!seller) {
        return def;
    }
    //seller被存为字符串，需要转为json对象
    seller = JSON.parse(seller);
    //不存在seller.id时补上
    if (!seller[id]) {
        return def;
    }
    return seller[id][key] || def;
}