package ebarimt

import (
	"fmt"
	"github.com/lambda-platform/ebarimt/posapi"
)

var PosAPI *posapi.PosAPI

func init() {
	api, err := posapi.NewPosAPI("/home/ebarimtuser/app/libPosAPI.so")
	//api, err := posapi.NewPosAPI("/home/mmk/ebarimt/mmk.so")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		PosAPI = api
		defer PosAPI.Close()
	}
}
