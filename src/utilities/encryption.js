/* 
特性	SHA-1	SHA-256	SHA-384	SHA-512
算法类型	哈希算法	哈希算法	哈希算法	哈希算法

输出位数	160 位	256 位	384 位	512 位

碰撞抵抗性	存在碰撞攻击漏洞	目前尚未发现有效碰撞攻击	目前尚未发现有效碰撞攻击	目前尚未发现有效碰撞攻击
安全性	不再被认为是安全的	安全	安全	安全
应用场景	不推荐使用	常用于数字签名、SSL/TLS	常用于数字签名、SSL/TLS	常用于数字签名、SSL/TLS
速度	相对较快	中等	中等	相对较慢
用途	数据完整性验证、数字签名	数据完整性验证、数字签名	数据完整性验证、数字签名	数据完整性验证、数字签名

用256
*/

/* 
辅助函数，用于将二进制数据转换为十六进制字符串
*/
function hex(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}
/* 
const data = new TextEncoder().encode('Hello, SHA-256!');
crypto.subtle.digest('SHA-256', data)
.then(hash => console.log('SHA-256 Hash:', hex(hash)));
*/

/* 
加盐加密
*/
const SHA256_SALT = 'Jenming';
/* 
调用async 方法也得到promise
*/
const SHA256 = async _data => {
    const data = new TextEncoder().encode(_data + SHA256_SALT);
    const hash = await crypto.subtle.digest('SHA-256', data)
    // .then(hash => { return hex(hash) });
    return hex(hash)
}

export { SHA256 }