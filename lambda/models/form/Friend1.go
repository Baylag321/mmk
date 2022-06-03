package form

import (
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/dataform"
	"github.com/lambda-platform/lambda/models"
	"github.com/thedevsaddam/govalidator"
	"lambda/lambda/models/form/formModels"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

func Friend1Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "friend",
		Identity: "id",
		Table:    "friend",
		Model:    new(formModels.Friend1),
		FieldTypes: map[string]string{
			"id":   "Text",
			"name": "Text",
		},
		Formulas: []models.Formula{},
		ValidationRules: govalidator.MapData{

			"name": []string{}},
		ValidationMessages: govalidator.MapData{

			"name": []string{}},
		SubForms:         []map[string]interface{}{},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}