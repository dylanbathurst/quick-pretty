# Quick pretty
qp is a simple cli tool that takes one argument, a JSON object, and pretty prints it.
It's great for when you're working locally on a program that outputs minimized JSON, but you want to quickly see the JSON object pretty printed.

## Usage

`> quick-pretty '{"foo":"bar","bazz":"buzz"}'`

Outputs
```
{
	"foo": "bar",
	"bazz": "buzz"
}
```

## Optional Usage

`> quick-pretty '{"foo":"bar","bazz":"buzz"}' bazz`

Outputs
```
{
	"foo": "bar"
}
```

## Pipe stringified JSON output from another program

`> echo '{"foo":"bar","bazz":"buzz"}' | quick-pretty`

Outputs
```
{
	"foo": "bar",
	"bazz": "buzz"
}
```