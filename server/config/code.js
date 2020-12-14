module.exports = {
  OK: { code: 0, msg: '' },

  USER_NOT_FOUND: { code: 100, msg: '用户不存在' },
  USER_PWD_ERROR: { code: 101, msg: '密码有误' },
  USER_USERNAME_WARN: { code: 102, msg: '用户名长度不少于4位' },
  USER_PWD_WARN: { code: 103, msg: '新密码不少于6位数！' },
  USER_USERNAME_HAS: { code: 104, msg: '用户名称已被占用！' },

  ERROR: { code: -1, msg: '系统错误' },
  NOT_AUTH: { code: 401, msg: '未登录' },
  NOT_FOUND: { code: 404, msg: '未找到资源' }
}
