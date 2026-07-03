# Local deployment helper script
Set-Location -Path contracts/live_poll
cargo build --target wasm32-unknown-unknown --release
stellar contract deploy --wasm target/wasm32-unknown-unknown/release/live_poll.wasm --source alice --network testnet
