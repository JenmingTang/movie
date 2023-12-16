// 1. 为存储的数据添加时间戳：
// javascript
// Copy code
// 存储数据和过期时间到 localStorage
export function setWithExpiry(key, value, expiryInSeconds) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + expiryInSeconds * 1000 // 转为毫秒
    };
    /* 
    JSON.stringify('tang')
    '"tang"'
    所以建议直接放对象
    */
    localStorage.setItem(key, JSON.stringify(item));
}

// 获取数据和检查过期时间
export function getWithExpiry(key) {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null;
    }

    const item = JSON.parse(itemString);
    const now = new Date();

    // 检查过期时间
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}

// 使用示例
// 设置过期时间为1小时
// setWithExpiry('username', 'JohnDoe', 3600); 
// const storedUsername = getWithExpiry('username');
// console.log('Stored Username:', storedUsername);
// 2. 为所有项添加过期时间：
// 如果要为所有项添加过期时间，你可以在页面加载时检查每个项的过期时间，并根据需要删除过期的项。这可以通过循环 localStorage 或 sessionStorage 的所有项来实现。

/* 

export default types
 
//import {types}

export {
    types, sites, years, tags, ranks
}
*/
/* 
按秒的
*/
const MINUTE = 60
const HOUR = 60 * 60
const DAY = 60 * 60 * 24
const WEEK = 60 * 60 * 24 * 7
export {
    MINUTE, HOUR, DAY, WEEK
}