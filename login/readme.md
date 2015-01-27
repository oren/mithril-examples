# Login module

## Build js with browserify

    npm run build


## Misc

onchange: m.withAttr('value', login.vm.email)

it's like writing manyally function (e) { login.vm.email(e.target.value); }
as it's m.prop function, when called, it will be set the value of e.target.value
then, next login.vm.email() calls will return the value
