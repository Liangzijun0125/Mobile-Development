#### PHP后台restful服务实现方案：

REST（英文：Representational State Transfer，简称REST) ， 直译为表现层状态转移，或者表述性状态转移；Rest 指的是一组架构约束条件和原则，是web服务的一种架构风格，一种设计风格，是一种思想；同时Rest不是针对某一种编程语言的。

**本质**：一种软件架构风格
**核心**：面向资源设计的API

**解决问题**：

- 降低开发的复杂性
- 提高系统的可伸缩性

例如：设计一套API，为多个终端服务。

**设计概念和准则**

- 网络上的所有事物都可以被抽象为资源
- 每一个资源都有唯一的资源标识，对资源的操作不会改变这些标识
- 所有的操作都是无状态的（本次操作、下次操作、上次操作之间无关系）

资源：网络上的一个实体、具体信息。


符合REST设计风格的Web API称为RESTful API。它从以下三个方面资源进行定义：

- 直观简短的资源地址：URI，比如：`http://example.com/resources/`。
- 传输的资源：Web服务接受与返回的互联网媒体类型，比如：JSON，XML，YAM等。
- 对资源的操作：Web服务在该资源上所支持的一系列请求方法（比如：POST，GET，PUT或DELETE）。



以webService为例通俗解释。

非Rest设计，以往我们都会这么写：

http://localhost:8080/admin/getUser （查询用户）

http://localhost:8080/admin/addUser （新增用户）

http://localhost:8080/admin/updateUser （更新用户）

http://localhost:8080/admin/deleteUser （删除用户）

总结：以不同的URL（主要为使用动词）进行不同的操作。

 

Rest架构：

GET http://localhost:8080/admin/user （查询用户）

POST http://localhost:8080/admin/user （新增用户）

PUT http://localhost:8080/admin/user （更新用户）

DELETE http://localhost:8080/admin/user （删除用户）

总结：URL只指定资源，以HTTP方法动词进行不同的操作。用HTTP STATUS/CODE定义操作结果。

Restful：遵守了rest风格的web服务便可称为Restful。



**常用的响应状态码(httpCode)**

| 状态码 | 描述           |
| ------ | -------------- |
| 200    | 请求成功       |
| 201    | 创建成功       |
| 202    | 更新成功       |
| 400    | 无效请求       |
| 401    | 未授权         |
| 403    | 禁止访问       |
| 404    | 请求资源不存在 |
| 500    | 内部错误       |



#### 请求方式

【GET】          /users                # 查询用户信息列表

【GET】          /users/1001           # 查看某个用户信息

【POST】         /users                # 新建用户信息

【PUT】          /users/1001           # 更新用户信息(全部字段)

【PATCH】        /users/1001           # 更新用户信息(部分字段)

【DELETE】       /users/1001           # 删除用户信息

【PATCH】一般不用，用【PUT】

 

#### 查询参数

RESTful API 接口应该提供参数，过滤返回结果。

【GET】  /{version}/{resources}/{resource_id}?offset=0&limit=20

 

#### 响应参数

JSON格式（code、data、msg）


#### 为什么需要Restful？ 

- URL具有很强可读性的，具有自描述性， 对程序员友好 

- 规范化请求过程和返回结果

- 资源描述与视图的松耦合

- 可提供OpenAPI，便于第三方系统集成，提高互操作性

- 提供无状态的服务接口，降低复杂度，可提高应用的水平扩展性
-  不暴露内部代码结构，更安全 

 

