import { getWithExpiry } from "./time";
import { ElMessage, ElNotification } from 'element-plus'
const checkUserAuthentication = () => {
    const user = getWithExpiry("user");
    if (user != null) {
        return true;
    }
    return false;
}
export {
    checkUserAuthentication
}