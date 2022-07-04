use structopt::StructOpt;

#[derive(Debug)]
struct Terminator {
    id: u32,
    name: String,
    active: bool,
}

#[derive(Debug, StructOpt)]
struct Cli {
    command: String,
    args: Vec<String>,
}

fn main() {
    let args = Cli::from_args();
    let mut t1: Terminator = Terminator {
        active: true,
        id: 209,
        name: args.command,
    };
    t1.active = false;
    println!("{:?}", t1.name);
    println!("{:#?}", &t1);
}
