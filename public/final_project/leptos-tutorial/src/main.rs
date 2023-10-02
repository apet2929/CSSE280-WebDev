mod app;

use leptos::*;
use leptos::html::*;
use leptos_meta::*;
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

pub fn app(cx: leptos_meta::BodyContext) -> impl IntoView {

    
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
                .child("Yeee: ")
                .child(move || count.get())
        )
        .child(
            ProgressBar(ProgressBarProps { max: (50), progress2: (Signal::derive(move || count.get())) })
        )
        .dyn_classes(move || vec!["red", "blue", "yellow", "green"])
}

// This `main` function is the entry point into the app
// It just mounts our component to the <body>
// Because we defined it as `fn App`, we can now use it in a
// template as <App/>

#[component]
fn MyApp() -> impl IntoView {
    provide_meta_context();
    view! {
      <main>
        <Title text="Page 1"/>
        <Stylesheet href="/style.css"/>
        <div class="text-centered">
            "Hello world!"
        </div>
      </main>
    }
}

// fn main() {
//     leptos::mount_to_body(MyApp)
// }

use app::*;
use leptos::*;

pub fn main() {
    _ = console_log::init_with_level(log::Level::Debug);
    console_error_panic_hook::set_once();

    logging::log!("csr mode - mounting to body");

    mount_to_body(|| {
        view! { <App /> }
    });
}
