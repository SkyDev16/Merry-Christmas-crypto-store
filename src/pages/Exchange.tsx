import { useState } from 'react';
import { MainLayout } from '@/layout/MainLayout';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { tokenList } from '@/token/tokenList';

export default function Exchange() {
  const { isConnected, connect } = useWallet();
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');

  const handleSwap = async () => {
    if (!isConnected) return;
    
    // Implement swap logic here
    console.log('Swapping', amount, fromToken, 'to', toToken);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Exchange</h1>

        {!isConnected ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Connect Your Wallet</CardTitle>
              <CardDescription>Connect your wallet to start trading</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={connect}>Connect Wallet</Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Swap Tokens</CardTitle>
              <CardDescription>Exchange tokens instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1"
                  />
                  <Select value={fromToken} onValueChange={setFromToken}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tokenList.map((token) => (
                        <SelectItem key={token.symbol} value={token.symbol}>
                          {token.symbol}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="0.0"
                    disabled
                    className="flex-1"
                  />
                  <Select value={toToken} onValueChange={setToToken}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tokenList.map((token) => (
                        <SelectItem key={token.symbol} value={token.symbol}>
                          {token.symbol}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSwap} className="w-full" disabled={!amount}>
                Swap
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  );
}
