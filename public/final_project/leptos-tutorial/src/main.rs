use leptos::*;
use leptos::html::*;
// use leptos::ev::*;

// Example usage:
// let (count, set_count) = create_signal(0);
// let double_count = move || count.get() * 2;
// <ProgressBar progress=count/>
// - use `Signal::derive()` to wrap a derived signal
// <ProgressBar progress=Signal::derive(double_count)/>
#[component]
fn ProgressBar(
    #[prop(default = 100)]
    max: u16,
    #[prop(into)]
    progress2: Signal<i32>
) -> impl IntoView
{
    view! {
        <progress
            max=max
            value=progress2
        />
    }
}

pub fn app() -> impl IntoView {
    let(count, set_count) = create_signal(0);
    div()
        .child(
            button().
                on(ev::click, move |_| set_count.set(count.get()-1))
                .child("Decrease")
        )
        .child(
            button().
                on(ev::click, move |_| set_count.set(count.get()+1))
                .child("Increase")
        )
        .child(
            p()
                .child("Value: ")
                .child(move || count.get())
        )
        .dyn_classes(move || vec!["red", "blue", "yellow", "green"])
}

// This `main` function is the entry point into the app
// It just mounts our component to the <body>
// Because we defined it as `fn App`, we can now use it in a
// template as <App/>
fn main() {
    leptos::mount_to_body(app)
}
