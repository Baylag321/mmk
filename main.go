package main

import (
	"lambda/bootstrap"
)

func main() {

	lambda := bootstrap.Set()
	//DBSchema.GetStruct("users")
	//DBSchema.GetStruct("cart_sub_menu_food")
	//DBSchema.GetStruct("sub_menu_foods_gt_neg")

	lambda.Start()

}
