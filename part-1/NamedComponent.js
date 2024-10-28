// ***NamedComponent***
// renders a *p* that should accept a property of “name” and display text “My name is *name*”.
//  Props:
// - name, your name
function NamedComponent({ name }) {
    return <p>My name is {name}</p>; 
}