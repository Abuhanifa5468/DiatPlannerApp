import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import tailwind from '@tailwind';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopBar} from '@sharedComponents';
import {useQuery} from 'react-query';
import {getCategoryRemote, getCheckBranchRemote} from '../../remote/userRemote';
import {AddressIcon} from '../../assets/icons';
import {infoBox} from '../../workers/utils';

const log = console.log;

export default function DashBoardScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [val, setValue] = useState('');

  const categoryData = useQuery(['getCategoryRemote', 1], getCategoryRemote);
  const checkBranchData = useQuery(
    ['getCheckBranchRemote'],
    getCheckBranchRemote,
  );
  // console.log("fffff",category.data)

  // console.log('category--------',category.data)

  return (
    <View style={tailwind('bg-white h-full p-3')}>
      <TopBar title="Hello" />
      {categoryData.data?.status ? (
        <View>
          <Text style={[tailwind('text-red font-bold')]}>Run categoory</Text>
          <AddressIcon />
        </View>
      ) : null}
      <Button
        title="Show toast"
        onPress={() => infoBox('This is test')}
      />
      {/* <Image
        source={assets.react_logo}
        resizeMode="contain"
        style={[tailwind('w-full h-60')]}
      /> */}
    </View>
  );
}
