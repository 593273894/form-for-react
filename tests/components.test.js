import React from 'react';
import { Form, Input, RadioGroup, CheckboxGroup, Select } from './form';

test('form component change', () => {
    let name;
    let value;
    const component = mount(
        <Form>
            <Input
                name="input"
                label="input"
                onChange={(paraName, paraValue) => { name = paraName; value = paraValue }} />
            <RadioGroup
                name="radio"
                label="radio"
                options={[{
                    label: 'red', value: 'red'
                }, {
                    label: 'yellow', value: 'yellow'
                }, {
                    label: 'blue', value: 'blue'
                }]}
                onChange={(paraName, paraValue) => { name = paraName; value = paraValue }} />
            <CheckboxGroup
                name="checkbox"
                label="checkbox"
                options={[{
                    label: 'apple', value: 'apple'
                }, {
                    label: 'banana', value: 'banana'
                }]}
                onChange={(paraName, paraValue) => { name = paraName; value = paraValue }} />
            <Select
                name="select"
                label="select"
                options={[{
                    label: 'cat', value: 'cat'
                }, {
                    label: 'dog', value: 'dog'
                }]}
                onChange={(paraName, paraValue) => { name = paraName; value = paraValue }} />
        </Form>
    );
    expect(component).toMatchSnapshot();

    component.find('#input').simulate('change', { target: { value: 'apple' } });
    expect(name).toBe('input');
    expect(value).toBe('apple');

    component.find('#radio').childAt(0).childAt(0).simulate('change');
    expect(name).toBe('radio');
    expect(value).toBe('red');
    component.find('#radio').childAt(1).childAt(0).simulate('change');
    expect(name).toBe('radio');
    expect(value).toBe('yellow');

    component.find('#checkbox').childAt(0).childAt(0).simulate('change');
    expect(name).toBe('checkbox');
    expect(value).toEqual(['apple']);
    component.find('#checkbox').childAt(1).childAt(0).simulate('change');
    expect(name).toBe('checkbox');
    expect(value).toEqual(['apple', 'banana']);
    component.find('#checkbox').childAt(0).childAt(0).simulate('change');
    expect(name).toBe('checkbox');
    expect(value).toEqual(['banana']);
    component.find('#checkbox').childAt(1).childAt(0).simulate('change');
    expect(name).toBe('checkbox');
    expect(value).toEqual([]);

    component.find('#select').simulate('change', { target: { value: 'cat' } });
    expect(name).toBe('select');
    expect(value).toEqual('cat');
    component.find('#select').simulate('change', { target: { value: 'dog' } });
    expect(name).toBe('select');
    expect(value).toEqual('dog');

    expect(component).toMatchSnapshot();
});

test('form submit', () => {
    let output;
    const component = mount(
        <Form onSubmit={(values) => output = values}>
            <Input
                name="input"
                label="input" />
            <RadioGroup
                name="radio"
                label="radio"
                options={[{
                    label: 'red', value: 'red'
                }, {
                    label: 'yellow', value: 'yellow'
                }, {
                    label: 'blue', value: 'blue'
                }]} />
            <CheckboxGroup
                name="checkbox"
                label="checkbox"
                options={[{
                    label: 'apple', value: 'apple'
                }, {
                    label: 'banana', value: 'banana'
                }]} />
            <Select
                name="select"
                label="select"
                options={[{
                    label: 'cat', value: 'cat'
                }, {
                    label: 'dog', value: 'dog'
                }]} />
        </Form>
    );
    expect(component).toMatchSnapshot();

    component.find('#input').simulate('change', { target: { value: 'apple' } });
    component.find('#radio').childAt(0).childAt(0).simulate('change');
    component.find('#checkbox').childAt(0).childAt(0).simulate('change');
    component.find('#select').simulate('change', { target: { value: 'cat' } });
    component.find('.form').simulate('submit');
    expect(output).toEqual({
        "input": 'apple',
        "radio": 'red',
        "checkbox": ['apple'],
        "select": 'cat',
    });

    expect(component).toMatchSnapshot();
});