import { useState } from 'react';
import { MainLayout } from '@/layout/MainLayout';
import { useWallet } from '@/hooks/useWallet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Contract, BrowserProvider, parseEther } from 'ethers';
import StakingABI from '@/abi/StakingContract.json';

const STAKING_CONTRACT_ADDRESS = import.meta.env.VITE_STAKING_CONTRACT_ADDRESS || '0x...';

export default function Staking() {
  const { address, isConnected, connect } = useWallet();
  const [stakeAmount, setStakeAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStake = async () => {
    if (!isConnected || !window.ethereum) return;

    setIsLoading(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(STAKING_CONTRACT_ADDRESS, StakingABI.abi, signer);

      const tx = await contract.stake(parseEther(stakeAmount));
      await tx.wait();

      alert('Staking successful!');
      setStakeAmount('');
    } catch (error) {
      console.error('Staking error:', error);
      alert('Staking failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Staking</h1>

        {!isConnected ? (
          <Card>
            <CardHeader>
              <CardTitle>Connect Your Wallet</CardTitle>
              <CardDescription>Connect your wallet to start staking</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={connect}>Connect Wallet</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Stake Tokens</CardTitle>
                <CardDescription>Stake your tokens to earn rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="number"
                  placeholder="Amount to stake"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                <Button onClick={handleStake} disabled={isLoading || !stakeAmount}>
                  {isLoading ? 'Staking...' : 'Stake'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
                <CardDescription>View your staking information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Connected: {address}</p>
                  <p className="text-sm">Staked Balance: 0 ETH</p>
                  <p className="text-sm">Rewards: 0 ETH</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
