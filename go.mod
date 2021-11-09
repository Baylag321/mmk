module lambda

go 1.15

require (
	github.com/99designs/gqlgen v0.14.0
	github.com/foolin/goview v0.3.0
	github.com/go-redis/redis v6.15.9+incompatible
	github.com/gorilla/websocket v1.4.2
	github.com/labstack/echo/v4 v4.5.0
	github.com/lambda-platform/adminmodule v0.1.9
	github.com/lambda-platform/agent v0.2.2
	github.com/lambda-platform/chart v0.2.0
	github.com/lambda-platform/graphql v0.0.4
	github.com/lambda-platform/krud v0.2.4
	//github.com/lambda-platform/dataform v0.2.2
	github.com/lambda-platform/lambda v0.2.7
	github.com/lambda-platform/moqup v0.0.2
	github.com/lambda-platform/template v0.2.0
	github.com/onsi/ginkgo v1.16.5 // indirect
	github.com/onsi/gomega v1.17.0 // indirect
	github.com/shirou/gopsutil/v3 v3.21.8
	github.com/thedevsaddam/govalidator v1.9.10
	github.com/vektah/gqlparser/v2 v2.2.0
)

////PRO MODULES
//replace github.com/lambda-platform/crudlogger v0.0.1 => ../../go/crudlogger
//replace github.com/lambda-platform/adminmodule v0.0.8 => ../../go/adminmodule

//replace github.com/lambda-platform/agent v0.0.2 => ../../go/agent
//replace github.com/lambda-platform/krud v0.2.4 => ../../go/krud
//replace github.com/lambda-platform/dataform v0.2.1 => ../../go/dataform
//replace github.com/lambda-platform/lambda v0.2.6 => ../../go/lambda

//replace github.com/lambda-platform/moqup v0.0.2 => ../../go/moqup
//replace github.com/lambda-platform/template v0.0.2 => ../../go/template
