package main

import (
	"lambda/bootstrap"
)

func main() {

	lambda := bootstrap.Set()
	//DBSchema.GetStruct("food_balance")
	//DBSchema.GetStruct("sub_menu_gt_guraw")
	//DBSchema.GetStruct("sub_menu_foods_gt_neg")
	lambda.Start()

}
