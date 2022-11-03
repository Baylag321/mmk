// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package generated

import (
	"context"
	"errors"
	"fmt"
	"lambda/lambda/graph/models"
	"strconv"
	"sync"
	"time"

	"github.com/99designs/gqlgen/graphql"
	"github.com/vektah/gqlparser/v2/ast"
	"gorm.io/gorm"
)

// region    ************************** generated!.gotpl **************************

// endregion ************************** generated!.gotpl **************************

// region    ***************************** args.gotpl *****************************

// endregion ***************************** args.gotpl *****************************

// region    ************************** directives.gotpl **************************

// endregion ************************** directives.gotpl **************************

// region    **************************** field.gotpl *****************************

func (ec *executionContext) _Persons_CREATED_AT(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_CREATED_AT(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.CreatedAt, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		if !graphql.HasFieldError(ctx, fc) {
			ec.Errorf(ctx, "must not be null")
		}
		return graphql.Null
	}
	res := resTmp.(time.Time)
	fc.Result = res
	return ec.marshalNTime2timeᚐTime(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_CREATED_AT(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			return nil, errors.New("field of type Time does not have child fields")
		},
	}
	return fc, nil
}

func (ec *executionContext) _Persons_DELETED_AT(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_DELETED_AT(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.DeletedAt, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		return graphql.Null
	}
	res := resTmp.(gorm.DeletedAt)
	fc.Result = res
	return ec.marshalOGormDeletedAt2gormᚗioᚋgormᚐDeletedAt(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_DELETED_AT(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			return nil, errors.New("field of type GormDeletedAt does not have child fields")
		},
	}
	return fc, nil
}

func (ec *executionContext) _Persons_FIRST_NAME(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_FIRST_NAME(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.FirstName, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		if !graphql.HasFieldError(ctx, fc) {
			ec.Errorf(ctx, "must not be null")
		}
		return graphql.Null
	}
	res := resTmp.(string)
	fc.Result = res
	return ec.marshalNString2string(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_FIRST_NAME(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			return nil, errors.New("field of type String does not have child fields")
		},
	}
	return fc, nil
}

func (ec *executionContext) _Persons_LAST_NAME(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_LAST_NAME(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.LastName, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		if !graphql.HasFieldError(ctx, fc) {
			ec.Errorf(ctx, "must not be null")
		}
		return graphql.Null
	}
	res := resTmp.(string)
	fc.Result = res
	return ec.marshalNString2string(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_LAST_NAME(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			return nil, errors.New("field of type String does not have child fields")
		},
	}
	return fc, nil
}

func (ec *executionContext) _Persons_PERSON_ID(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_PERSON_ID(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.PersonID, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		if !graphql.HasFieldError(ctx, fc) {
			ec.Errorf(ctx, "must not be null")
		}
		return graphql.Null
	}
	res := resTmp.(int64)
	fc.Result = res
	return ec.marshalNID2int64(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_PERSON_ID(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			return nil, errors.New("field of type ID does not have child fields")
		},
	}
	return fc, nil
}

func (ec *executionContext) _Persons_UPDATED_AT(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_UPDATED_AT(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.UpdatedAt, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		if !graphql.HasFieldError(ctx, fc) {
			ec.Errorf(ctx, "must not be null")
		}
		return graphql.Null
	}
	res := resTmp.(time.Time)
	fc.Result = res
	return ec.marshalNTime2timeᚐTime(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_UPDATED_AT(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			return nil, errors.New("field of type Time does not have child fields")
		},
	}
	return fc, nil
}

func (ec *executionContext) _Persons_PERSON_ITEMS(ctx context.Context, field graphql.CollectedField, obj *models.Persons) (ret graphql.Marshaler) {
	fc, err := ec.fieldContext_Persons_PERSON_ITEMS(ctx, field)
	if err != nil {
		return graphql.Null
	}
	ctx = graphql.WithFieldContext(ctx, fc)
	defer func() {
		if r := recover(); r != nil {
			ec.Error(ctx, ec.Recover(ctx, r))
			ret = graphql.Null
		}
	}()
	resTmp, err := ec.ResolverMiddleware(ctx, func(rctx context.Context) (interface{}, error) {
		ctx = rctx // use context from middleware stack in children
		return obj.PersonItems, nil
	})
	if err != nil {
		ec.Error(ctx, err)
		return graphql.Null
	}
	if resTmp == nil {
		return graphql.Null
	}
	res := resTmp.([]*models.PersonItems)
	fc.Result = res
	return ec.marshalOPersonItems2ᚕᚖlambdaᚋlambdaᚋgraphᚋmodelsᚐPersonItemsᚄ(ctx, field.Selections, res)
}

func (ec *executionContext) fieldContext_Persons_PERSON_ITEMS(ctx context.Context, field graphql.CollectedField) (fc *graphql.FieldContext, err error) {
	fc = &graphql.FieldContext{
		Object:     "Persons",
		Field:      field,
		IsMethod:   false,
		IsResolver: false,
		Child: func(ctx context.Context, field graphql.CollectedField) (*graphql.FieldContext, error) {
			switch field.Name {
			case "ID":
				return ec.fieldContext_PersonItems_ID(ctx, field)
			case "ITEM_DESCRIPTION":
				return ec.fieldContext_PersonItems_ITEM_DESCRIPTION(ctx, field)
			case "ITEM_NAME":
				return ec.fieldContext_PersonItems_ITEM_NAME(ctx, field)
			case "PERSON_ID":
				return ec.fieldContext_PersonItems_PERSON_ID(ctx, field)
			}
			return nil, fmt.Errorf("no field named %q was found under type PersonItems", field.Name)
		},
	}
	return fc, nil
}

// endregion **************************** field.gotpl *****************************

// region    **************************** input.gotpl *****************************

// endregion **************************** input.gotpl *****************************

// region    ************************** interface.gotpl ***************************

// endregion ************************** interface.gotpl ***************************

// region    **************************** object.gotpl ****************************

var personsImplementors = []string{"Persons"}

func (ec *executionContext) _Persons(ctx context.Context, sel ast.SelectionSet, obj *models.Persons) graphql.Marshaler {
	fields := graphql.CollectFields(ec.OperationContext, sel, personsImplementors)
	out := graphql.NewFieldSet(fields)
	var invalids uint32
	for i, field := range fields {
		switch field.Name {
		case "__typename":
			out.Values[i] = graphql.MarshalString("Persons")
		case "CREATED_AT":

			out.Values[i] = ec._Persons_CREATED_AT(ctx, field, obj)

			if out.Values[i] == graphql.Null {
				invalids++
			}
		case "DELETED_AT":

			out.Values[i] = ec._Persons_DELETED_AT(ctx, field, obj)

		case "FIRST_NAME":

			out.Values[i] = ec._Persons_FIRST_NAME(ctx, field, obj)

			if out.Values[i] == graphql.Null {
				invalids++
			}
		case "LAST_NAME":

			out.Values[i] = ec._Persons_LAST_NAME(ctx, field, obj)

			if out.Values[i] == graphql.Null {
				invalids++
			}
		case "PERSON_ID":

			out.Values[i] = ec._Persons_PERSON_ID(ctx, field, obj)

			if out.Values[i] == graphql.Null {
				invalids++
			}
		case "UPDATED_AT":

			out.Values[i] = ec._Persons_UPDATED_AT(ctx, field, obj)

			if out.Values[i] == graphql.Null {
				invalids++
			}
		case "PERSON_ITEMS":

			out.Values[i] = ec._Persons_PERSON_ITEMS(ctx, field, obj)

		default:
			panic("unknown field " + strconv.Quote(field.Name))
		}
	}
	out.Dispatch()
	if invalids > 0 {
		return graphql.Null
	}
	return out
}

// endregion **************************** object.gotpl ****************************

// region    ***************************** type.gotpl *****************************

func (ec *executionContext) marshalNPersons2lambdaᚋlambdaᚋgraphᚋmodelsᚐPersons(ctx context.Context, sel ast.SelectionSet, v models.Persons) graphql.Marshaler {
	return ec._Persons(ctx, sel, &v)
}

func (ec *executionContext) marshalNPersons2ᚖlambdaᚋlambdaᚋgraphᚋmodelsᚐPersons(ctx context.Context, sel ast.SelectionSet, v *models.Persons) graphql.Marshaler {
	if v == nil {
		if !graphql.HasFieldError(ctx, graphql.GetFieldContext(ctx)) {
			ec.Errorf(ctx, "the requested element is null which the schema does not allow")
		}
		return graphql.Null
	}
	return ec._Persons(ctx, sel, v)
}

func (ec *executionContext) marshalOPersons2ᚕᚖlambdaᚋlambdaᚋgraphᚋmodelsᚐPersonsᚄ(ctx context.Context, sel ast.SelectionSet, v []*models.Persons) graphql.Marshaler {
	if v == nil {
		return graphql.Null
	}
	ret := make(graphql.Array, len(v))
	var wg sync.WaitGroup
	isLen1 := len(v) == 1
	if !isLen1 {
		wg.Add(len(v))
	}
	for i := range v {
		i := i
		fc := &graphql.FieldContext{
			Index:  &i,
			Result: &v[i],
		}
		ctx := graphql.WithFieldContext(ctx, fc)
		f := func(i int) {
			defer func() {
				if r := recover(); r != nil {
					ec.Error(ctx, ec.Recover(ctx, r))
					ret = nil
				}
			}()
			if !isLen1 {
				defer wg.Done()
			}
			ret[i] = ec.marshalNPersons2ᚖlambdaᚋlambdaᚋgraphᚋmodelsᚐPersons(ctx, sel, v[i])
		}
		if isLen1 {
			f(i)
		} else {
			go f(i)
		}

	}
	wg.Wait()

	for _, e := range ret {
		if e == graphql.Null {
			return graphql.Null
		}
	}

	return ret
}

// endregion ***************************** type.gotpl *****************************
