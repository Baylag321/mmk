package models

import (
	"gorm.io/gorm"
	"time"
)

type CartMenu struct {
	CancelledAt *time.Time `gorm:"column:cancelled_at" json:"cancelled_at"`
	CartID      int        `gorm:"column:cart_id" json:"cart_id"`
	CreatedAt   time.Time  `gorm:"column:created_at" json:"created_at"`
	//DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ID          int        `gorm:"column:id" json:"id"`
	MenuID      int        `gorm:"column:menu_id" json:"menu_id"`
	OrderNumber *string    `gorm:"column:order_number" json:"order_number"`
	OrderRuleID int        `gorm:"column:order_rule_id" json:"order_rule_id"`
	OrderStatus *string    `gorm:"column:order_status" json:"order_status"`
	PaymentType *string    `gorm:"column:payment_type" json:"payment_type"`
	Qty         int        `gorm:"column:qty" json:"qty"`
	UpdatedAt   *time.Time `gorm:"column:updated_at" json:"updated_at"`
	UserID      int        `gorm:"column:user_id" json:"user_id"`
	KitchenID   int        `gorm:"column:kitchen_id" json:"kitchen_id"`
	PacketPrice int        `gorm:"column:packet_price" json:"packet_price"`
	IsDelivery  string     `gorm:"column:is_delivery" json:"is_delivery"`
	CompanyID   *int       `gorm:"column:company_id" json:"company_id"`
}

func (c *CartMenu) TableName() string {
	return "cart_menu"
}

type CartSubMenu struct {
	FoodTypeID int `gorm:"column:food_type_id" json:"food_type_id"`
	ID         int `gorm:"column:id" json:"id"`
	MenuID     int `gorm:"column:menu_id" json:"menu_id"`
}

func (c *CartSubMenu) TableName() string {
	return "cart_sub_menu"
}

type CartSubMenuFood struct {
	FoodID    int `gorm:"column:food_id" json:"food_id"`
	ID        int `gorm:"column:id" json:"id"`
	SubMenuID int `gorm:"column:sub_menu_id" json:"sub_menu_id"`
}

func (c *CartSubMenuFood) TableName() string {
	return "cart_sub_menu_food"
}

type OrderSetCheck struct {
	CancelledAt *time.Time     `gorm:"column:cancelled_at" json:"cancelled_at"`
	CartID      int            `gorm:"column:cart_id" json:"cart_id"`
	CreatedAt   *time.Time     `gorm:"column:created_at" json:"created_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ID          int            `gorm:"column:id" json:"id"`
	MenuID      *int           `gorm:"column:menu_id" json:"menu_id"`
	OrderNumber *string        `gorm:"column:order_number" json:"order_number"`
	PaymentType *string        `gorm:"column:payment_type" json:"payment_type"`
	UpdatedAt   *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	UserID      *int           `gorm:"column:user_id" json:"user_id"`
	OrderStatus *string        `gorm:"column:order_status" json:"order_status"`
}

func (o *OrderSetCheck) TableName() string {
	return "order_set"
}

type CartMenuCheck struct {
	CancelledAt *time.Time `gorm:"column:cancelled_at" json:"cancelled_at"`
	CartID      *int       `gorm:"column:cart_id" json:"cart_id"`
	CreatedAt   *time.Time `gorm:"column:created_at" json:"created_at"`
	//DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ID          int        `gorm:"column:id" json:"id"`
	MenuID      int        `gorm:"column:menu_id" json:"menu_id"`
	OrderNumber *string    `gorm:"column:order_number" json:"order_number"`
	OrderRuleID int        `gorm:"column:order_rule_id" json:"order_rule_id"`
	OrderStatus *string    `gorm:"column:order_status" json:"order_status"`
	PaymentType *string    `gorm:"column:payment_type" json:"payment_type"`
	Qty         *int       `gorm:"column:qty" json:"qty"`
	UpdatedAt   *time.Time `gorm:"column:updated_at" json:"updated_at"`
	UserID      int        `gorm:"column:user_id" json:"user_id"`
}

func (c *CartMenuCheck) TableName() string {
	return "cart_menu"
}

type ViewCartMenu struct {
	ID                *int       `gorm:"column:id" json:"id"`
	UserID            *int       `gorm:"column:user_id" json:"user_id"`
	MenuID            *int       `gorm:"column:menu_id" json:"menu_id"`
	CartID            *int       `gorm:"column:cart_id" json:"cart_id"`
	Qty               *int       `gorm:"column:qty" json:"qty"`
	KitchenID         *int       `gorm:"column:kitchen_id" json:"kitchen_id"`
	SetName           *string    `gorm:"column:set_name" json:"set_name"`
	SetDate           *time.Time `gorm:"column:set_date" json:"set_date"`
	MorningOrderStart *string    `gorm:"column:morning_order_start" json:"morning_order_start"`
	MorningOrderEnd   *string    `gorm:"column:morning_order_end" json:"morning_order_end"`
	FoodOrderTimeName *string    `gorm:"column:food_order_time_name" json:"food_order_time_name"`
	OrderRuleImages   *string    `gorm:"column:order_rule_images" json:"order_rule_images"`
	RuleImages        *string    `gorm:"column:rule_images" json:"rule_images"`
	PacketPrice       *int       `gorm:"column:packet_price" json:"packet_price"`
	OrderRuleID       int        `gorm:"column:order_rule_id" json:"order_rule_id"`
}

func (v *ViewCartMenu) TableName() string {
	return "view_cart_menu"
}

type OrderSetFood struct {
	CartID      int            `gorm:"column:cart_id" json:"cart_id"`
	CreatedAt   *time.Time     `gorm:"column:created_at" json:"created_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ID          int            `gorm:"column:id" json:"id"`
	OrderNumber string         `gorm:"column:order_number" json:"order_number"`
	UpdatedAt   *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	UserID      int            `gorm:"column:user_id" json:"user_id"`
}

func (o *OrderSetFood) TableName() string {
	return "order_set_food"
}

type ViewCartSubMenu struct {
	FoodType   *string `gorm:"column:food_type" json:"food_type"`
	FoodTypeID *int    `gorm:"column:food_type_id" json:"food_type_id"`
	ID         *int    `gorm:"column:id" json:"id"`
	MenuID     *int    `gorm:"column:menu_id" json:"menu_id"`
}

func (v *ViewCartSubMenu) TableName() string {
	return "view_cart_sub_menu"
}

type ViewCartSubMenuFood struct {
	FoodIamge *string `gorm:"column:food_iamge" json:"food_iamge"`
	FoodID    *int    `gorm:"column:food_id" json:"food_id"`
	FoodName  *string `gorm:"column:food_name" json:"food_name"`
	ID        *int    `gorm:"column:id" json:"id"`
	SubMenuID *int    `gorm:"column:sub_menu_id" json:"sub_menu_id"`
}

func (v *ViewCartSubMenuFood) TableName() string {
	return "view_cart_sub_menu_food"
}

type ViewFoodBalance struct {
	CreatedAt   *time.Time     `gorm:"column:created_at" json:"created_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	FoodID      int            `gorm:"column:food_id" json:"food_id"`
	FoodName    string         `gorm:"column:food_name" json:"food_name"`
	FoodPrice   float32        `gorm:"column:food_price" json:"food_price"`
	FoodType    *string        `gorm:"column:food_type" json:"food_type"`
	FoodTypeID  *int           `gorm:"column:food_type_id" json:"food_type_id"`
	ID          *int           `gorm:"column:id" json:"id"`
	KitchenID   *int           `gorm:"column:kitchen_id" json:"kitchen_id"`
	KitckenName string         `gorm:"column:kitcken_name" json:"kitcken_name"`
	Quantity    int            `gorm:"column:quantity" json:"quantity"`
	UpdatedAt   *time.Time     `gorm:"column:updated_at" json:"updated_at"`
}

func (v *ViewFoodBalance) TableName() string {
	return "view_food_balance"
}
