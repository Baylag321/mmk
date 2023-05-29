package controllers

import (
	"fmt"
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/config"
	notifyHandler "github.com/lambda-platform/lambda/notify/handler"
	modelsModels "github.com/lambda-platform/lambda/notify/models"
	"lambda/app/models"
)

func LeftOverQuantitySend(FoodID int, KitchenID int, Quantity int) {

	foods := []models.ViewFoodBalance{}

	DB.DB.Where("food_id = ? AND kitchen_id = ?", FoodID, KitchenID).Find(&foods)

	for _, food := range foods {

		FCMData := modelsModels.FCMData{
			Title:       "Хоолны үлдэгдэл",
			Body:        fmt.Sprintf("%s, %s-хоолны үлдэгдэл дуусж байна. Үлдэгдэл %d !!!", food.KitckenName, food.FoodName, food.Quantity),
			FirstName:   "Систем",
			Sound:       config.LambdaConfig.Notify.Sound,
			Icon:        config.LambdaConfig.Favicon,
			Link:        "/admin",
			ClickAction: config.LambdaConfig.Domain + "/admin",
		}

		FCMNotification := modelsModels.FCMNotification{
			Title:       "Хоолны үлдэгдэл",
			Body:        fmt.Sprintf("%s, %s-үлдэгдэл дуусж байна. Үлдэгдэл %d !!!", food.KitckenName, food.FoodName, food.Quantity),
			Icon:        config.LambdaConfig.Domain + "/" + config.LambdaConfig.Favicon,
			ClickAction: config.LambdaConfig.Domain + "/admin",
		}

		data := modelsModels.NotificationData{
			//Users: []int{17},
			Roles:        []int{3},
			Data:         FCMData,
			Notification: FCMNotification,
		}
		notifyHandler.CreateNotification(data, map[string]interface{}{})
	}

}

//func LeftTimeSend(MenuID int) {
//
//	menu := models.CountLeftMenuTime{}
//
//	DB.DB.Where("id = ?", MenuID).Find(&menu)
//
//	FCMData := modelsModels.FCMData{
//		Title:       "Сет хоолны хугацаа дуусаж байна",
//		Body:        fmt.Sprintf("%s хугцаа дуусаж байна", menu.SetName),
//		FirstName:   "Систем",
//		Sound:       config.LambdaConfig.Notify.Sound,
//		Icon:        config.LambdaConfig.Favicon,
//		Link:        "/admin",
//		ClickAction: config.LambdaConfig.Domain + "/admin",
//	}
//
//	FCMNotification := modelsModels.FCMNotification{
//		Title:       "Сет хоолны хугцаа дуусаж байна",
//		Body:        fmt.Sprintf("%s хугцаа дуусаж байна", menu.SetName),
//		Icon:        config.LambdaConfig.Domain + "/" + config.LambdaConfig.Favicon,
//		ClickAction: config.LambdaConfig.Domain + "/admin",
//	}
//
//	data := modelsModels.NotificationData{
//		//Users: []int{17},
//		Roles:        []int{3},
//		Data:         FCMData,
//		Notification: FCMNotification,
//	}
//	notifyHandler.CreateNotification(data, map[string]interface{}{})
//}
