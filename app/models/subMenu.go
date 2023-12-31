package models

import (
	"github.com/lambda-platform/lambda/DB"
	"gorm.io/gorm"
	"time"
)

type TblMenu struct {
	CreatedAt     *time.Time     `gorm:"column:created_at" json:"created_at"`
	DeletedAt     gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	FoodTypeID    *int           `gorm:"column:food_type_id" json:"food_type_id"`
	ID            int            `gorm:"column:id" json:"id"`
	KitchenID     *int           `gorm:"column:kitchen_id" json:"kitchen_id"`
	OrderBranchID *int           `gorm:"column:order_branch_id" json:"order_branch_id"`
	OrderRuleID   int            `gorm:"column:order_rule_id" json:"order_rule_id"`
	OrderUserID   *int           `gorm:"column:order_user_id" json:"order_user_id"`
	PacketPriceID *int           `gorm:"column:packet_price_id" json:"packet_price_id"`
	Qty           *int           `gorm:"column:qty" json:"qty"`
	SetDate       *time.Time     `gorm:"column:set_date" json:"set_date"`
	SetName       string         `gorm:"column:set_name" json:"set_name"`
	UpdatedAt     *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	UserID        *int           `gorm:"column:user_id" json:"user_id"`
}

func (t *TblMenu) TableName() string {
	return "tbl_menu"
}

type SubMenu struct {
	FoodTypeID int `gorm:"column:food_type_id" json:"food_type_id"`
	ID         int `gorm:"column:id" json:"id"`
	MenuID     int `gorm:"column:menu_id" json:"menu_id"`
}

func (s *SubMenu) TableName() string {
	return "sub_menu"
}

type SubMenuFoods struct {
	FoodID          int      `gorm:"column:food_id" json:"food_id"`
	ID              int      `gorm:"column:id" json:"id"`
	OrderGtGuraw    *float32 `gorm:"column:order_gt_guraw" json:"order_gt_guraw"`
	OrderGtHoer     *float32 `gorm:"column:order_gt_hoer" json:"order_gt_hoer"`
	OrderGtNeg      *float32 `gorm:"column:order_gt_neg" json:"order_gt_neg"`
	QuantityGtGuraw *float32 `gorm:"column:quantity_gt_guraw" json:"quantity_gt_guraw"`
	QuantityGtHoer  *float32 `gorm:"column:quantity_gt_hoer" json:"quantity_gt_hoer"`
	SetQty          *int     `gorm:"column:set_qty" json:"set_qty"`
	SubMenuID       int      `gorm:"column:sub_menu_id" json:"sub_menu_id"`
}

func (s *SubMenuFoods) TableName() string {
	return "sub_menu_foods"
}

type ViewCartSetFood struct {
	DesertBalanceID *int       `gorm:"column:desert_balance_id" json:"desert_balance_id"`
	DesertFoodID    *int       `gorm:"column:desert_food_id" json:"desert_food_id"`
	DesertFoodType  *string    `gorm:"column:desert_food_type" json:"desert_food_type"`
	DesertImage     *string    `gorm:"column:desert_image" json:"desert_image"`
	DesertKitchenID *int       `gorm:"column:desert_kitchen_id" json:"desert_kitchen_id"`
	DesertName      *string    `gorm:"column:desert_name" json:"desert_name"`
	DesertQty       *float32   `gorm:"column:desert_qty" json:"desert_qty"`
	FoodIDDesert    *int       `gorm:"column:food_id_desert" json:"food_id_desert"`
	FoodIDHoer      *int       `gorm:"column:food_id_hoer" json:"food_id_hoer"`
	FoodIDNeg       *int       `gorm:"column:food_id_neg" json:"food_id_neg"`
	FoodIDUuh       *int       `gorm:"column:food_id_uuh" json:"food_id_uuh"`
	FoodIDZuush     *int       `gorm:"column:food_id_zuush" json:"food_id_zuush"`
	HoerBalanceID   *int       `gorm:"column:hoer_balance_id" json:"hoer_balance_id"`
	HoerFoodID      *int       `gorm:"column:hoer_food_id" json:"hoer_food_id"`
	HoerFoodName    *string    `gorm:"column:hoer_food_name" json:"hoer_food_name"`
	HoerFoodType    *string    `gorm:"column:hoer_food_type" json:"hoer_food_type"`
	HoerImage       *string    `gorm:"column:hoer_image" json:"hoer_image"`
	HoerKitchenID   *int       `gorm:"column:hoer_kitchen_id" json:"hoer_kitchen_id"`
	HoerQty         *float32   `gorm:"column:hoer_qty" json:"hoer_qty"`
	ID              int        `gorm:"column:id" json:"id"`
	KitchenID       *int       `gorm:"column:kitchen_id" json:"kitchen_id"`
	MenuID          *int       `gorm:"column:menu_id" json:"menu_id"`
	NegBalanceID    *int       `gorm:"column:neg_balance_id" json:"neg_balance_id"`
	NegFoodID       *int       `gorm:"column:neg_food_id" json:"neg_food_id"`
	NegFoodImage    *string    `gorm:"column:neg_food_image" json:"neg_food_image"`
	NegFoodName     *string    `gorm:"column:neg_food_name" json:"neg_food_name"`
	NegFoodType     *string    `gorm:"column:neg_food_type" json:"neg_food_type"`
	NegKitchenID    *int       `gorm:"column:neg_kitchen_id" json:"neg_kitchen_id"`
	NegQty          *float32   `gorm:"column:neg_qty" json:"neg_qty"`
	Ognoo           *time.Time `gorm:"column:ognoo" json:"ognoo"`
	PacketPrice     *float32   `gorm:"column:packet_price" json:"packet_price"`
	Price           *int       `gorm:"column:price" json:"price"`
	Qty             *int       `gorm:"column:qty" json:"qty"`
	RuleImages      *string    `gorm:"column:rule_images" json:"rule_images"`
	SetDate         DB.Date    `gorm:"column:set_date" json:"set_date"`
	SetName         *string    `gorm:"column:set_name" json:"set_name"`
	UserID          *int       `gorm:"column:user_id" json:"user_id"`
	UuhBalanceID    *int       `gorm:"column:uuh_balance_id" json:"uuh_balance_id"`
	UuhFoodID       *int       `gorm:"column:uuh_food_id" json:"uuh_food_id"`
	UuhFoodName     *string    `gorm:"column:uuh_food_name" json:"uuh_food_name"`
	UuhFoodType     *string    `gorm:"column:uuh_food_type" json:"uuh_food_type"`
	UuhImage        *string    `gorm:"column:uuh_image" json:"uuh_image"`
	UuhKitchenID    *int       `gorm:"column:uuh_kitchen_id" json:"uuh_kitchen_id"`
	UuhQty          *float32   `gorm:"column:uuh_qty" json:"uuh_qty"`
	ZuushBalanceID  *int       `gorm:"column:zuush_balance_id" json:"zuush_balance_id"`
	ZuushFoodID     *int       `gorm:"column:zuush_food_id" json:"zuush_food_id"`
	ZuushFoodName   *string    `gorm:"column:zuush_food_name" json:"zuush_food_name"`
	ZuushFoodType   *string    `gorm:"column:zuush_food_type" json:"zuush_food_type"`
	ZuushImage      *string    `gorm:"column:zuush_image" json:"zuush_image"`
	ZuushKitchenID  *int       `gorm:"column:zuush_kitchen_id" json:"zuush_kitchen_id"`
	ZuushQty        *float32   `gorm:"column:zuush_qty" json:"zuush_qty"`
}

func (v *ViewCartSetFood) TableName() string {
	return "view_cart_set_food"
}

type ViewSetFoodSubMenu struct {
	FoodType   *string `gorm:"column:food_type" json:"food_type"`
	FoodTypeID *int    `gorm:"column:food_type_id" json:"food_type_id"`
	ID         *int    `gorm:"column:id" json:"id"`
	MenuID     *int    `gorm:"column:menu_id" json:"menu_id"`
}

func (v *ViewSetFoodSubMenu) TableName() string {
	return "view_set_food_sub_menu"
}

type ViewSetFoodSubMenuFoods struct {
	FoodID    *int `gorm:"column:food_id" json:"food_id"`
	ID        *int `gorm:"column:id" json:"id"`
	KitchenID *int `gorm:"column:kitchen_id" json:"kitchen_id"`
	SetQty    *int `gorm:"column:set_qty" json:"set_qty"`
	SubMenuID *int `gorm:"column:sub_menu_id" json:"sub_menu_id"`
}

func (v *ViewSetFoodSubMenuFoods) TableName() string {
	return "view_set_food_sub_menu_foods"
}

type SetHoolTooCartRequestData struct {
	ID          int    `gorm:"column:id" json:"id"`
	MenuID      int    `json:"menu_id"`
	OrderRuleID int    `json:"order_rule_id"`
	Qty         int    `json:"qty"`
	KitchenID   int    `json:"kitchen_id"`
	IsDelivery  string `json:"is_delivery"`
	CompanyID   *int   `json:"company_id"`
	Items       []struct {
		MenuID     int `json:"menu_id"`
		FoodTypeID int `json:"food_type_id"`
		SubItems   []struct {
			FoodID    int `json:"food_id"`
			SubMenuID int `json:"sub_menu_id"`
		} `json:"subItems"`
	} `json:"items"`
}

type TblOrderRule struct {
	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	OrderCancelTime   *string        `gorm:"column:order_cancel_time" json:"order_cancel_time"`
	MorningOrderStart *string        `gorm:"column:morning_order_start" json:"morning_order_start"`
	MorningOrderEnd   string         `gorm:"column:morning_order_end" json:"morning_order_end"`
	FoodPriceID       *int           `gorm:"column:food_price_id" json:"food_price_id"`
	LunchOrderEnd     *string        `gorm:"column:lunch_order_end" json:"lunch_order_end"`
	DinnerOrderStart  *string        `gorm:"column:dinner_order_start" json:"dinner_order_start"`
	DinnerOrderEnd    *string        `gorm:"column:dinner_order_end" json:"dinner_order_end"`
	NightOrderStart   *string        `gorm:"column:night_order_start" json:"night_order_start"`
	NightOrderEnd     *string        `gorm:"column:night_order_end" json:"night_order_end"`
	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	OrderStart        *string        `gorm:"column:order_start" json:"order_start"`
	OrderEnd          *string        `gorm:"column:order_end" json:"order_end"`
	UserID            *int           `gorm:"column:user_id" json:"user_id"`
	FoodOrderTimeName *string        `gorm:"column:food_order_time_name" json:"food_order_time_name"`
	CanecelingTime    *string        `gorm:"column:caneceling_time" json:"caneceling_time"`
	Images            *string        `gorm:"column:images" json:"images"`
	RuleImages        *string        `gorm:"column:rule_images" json:"rule_images"`
}

func (t *TblOrderRule) TableName() string {
	return "tbl_order_rule"
}
