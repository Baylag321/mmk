package caller

import "lambda/lambda/models/grid"
import "github.com/lambda-platform/lambda/datagrid"

func GetMODEL(schema_id string) datagrid.Datagrid {

	switch schema_id {

	case "crud_grid":
		return grid.KrudGridDatagrid

	case "crud_log":
		return grid.CrudLogDatagrid

	case "analytic_grid":
		return grid.AnalyticGridDatagrid

	case "menu_grid":
		return grid.MenuGridDatagrid

	case "notification_target_grid":
		return grid.NotificationTargetDatagrid

	case "2":
		return grid.LutBarimtType2Datagrid

	case "5":
		return grid.LutPositionType5Datagrid

	case "9":
		return grid.LutOrderType9Datagrid

	case "7":
		return grid.LutPaymentType7Datagrid

	case "34":
		return grid.LutFoodType34Datagrid

	case "11":
		return grid.LutStaffType11Datagrid

	case "69":
		return grid.ViewFoodOrder69Datagrid

	case "116":
		return grid.ViewUser116Datagrid

	case "113":
		return grid.LutBank113Datagrid

	case "67":
		return grid.ViewFoodOrder67Datagrid

	case "223":
		return grid.ViewKitchen223Datagrid

	case "235":
		return grid.ViewTblMenuGtNeg235Datagrid

	case "105":
		return grid.FoodPrice105Datagrid

	case "190":
		return grid.ViewTblMenuGtNeg190Datagrid

	case "238":
		return grid.ViewTblMenuGtNeg238Datagrid

	case "16":
		return grid.ViewCompany16Datagrid

	case "101":
		return grid.LutMaterialStatus101Datagrid

	case "62":
		return grid.ViewFoodOrder62Datagrid

	case "228":
		return grid.TblMenuGtNeg228Datagrid

	case "57":
		return grid.LutFoodTimeType57Datagrid

	case "20":
		return grid.ViewFood20Datagrid

	case "59":
		return grid.ViewOrderRule59Datagrid

	case "99":
		return grid.LutMaterialUnit99Datagrid

	case "92":
		return grid.MenuOglooniiTsai92Datagrid

	case "118":
		return grid.KitchenOrders118Datagrid

	case "242":
		return grid.ViewFoodBalance242Datagrid

	case "64":
		return grid.LutKitchenType64Datagrid

	case "159":
		return grid.ViewFoodMenu159Datagrid

	case "103":
		return grid.ActiveFoodOrder103Datagrid

	case "266":
		return grid.LutPacketPrice266Datagrid

	case "71":
		return grid.AddLocation71Datagrid

	case "55":
		return grid.ViewMaterial55Datagrid

	case "195":
		return grid.OrdersView195Datagrid

	}
	return datagrid.Datagrid{}

}
